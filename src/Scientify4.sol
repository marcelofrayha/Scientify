// SPDX-License-Identifier: MIT
pragma solidity ^0.8.25;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Pausable.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Burnable.sol";
import "@ethsign/sign-protocol-evm/src/interfaces/ISP.sol";
import "@ethsign/sign-protocol-evm/src/models/Attestation.sol";
import "@ethsign/sign-protocol-evm/src/models/DataLocation.sol";

contract Scientify4 is ERC1155, Ownable, ERC1155Pausable, ERC1155Burnable {
    error NotAuthenticated();
    error ResearchCap();
    error NotEnoughValue();
    error PaymentFailed();
    error NotLiquidable();
    error NoTokenBalance();
    error InvalidAttestation();

    uint256 private researchNumber = 1;

    enum ResearchState {
        developing,
        developed,
        paid
    }

    struct Research {
        uint256 id;
        ResearchState state;
        uint256 investment;
        uint256 articlePrice;
        uint256 sharePrice;
        uint256 articlePriceIncreaseRate;
        uint256 funding;
        uint256 profit;
        address owner;
        string documentCID;
    }

    mapping(address => bool) public verifiedResearchers;
    mapping(address => Research[]) public researchRequest;
    mapping(uint256 => Research) public researchById;
    mapping (uint => address) public researchOwner;
    mapping(uint256 => string) private repository;
    mapping(address => uint64) public researcherVerificationAttestations;

    // Ethereum Sepolia
    // ISP public spInstance = ISP(0x878c92FD89d8E0B93Dc0a3c907A2adc7577e39c5);
    // Arbitrum Seplia
    ISP public spInstance = ISP(0x4e4af2a21ebf62850fD99Eb6253E1eFBb56098cD);

    // uint64 public schemaId;

    constructor() ERC1155("EURK") Ownable(msg.sender) {}

    // Event to log the attestation of a researcher's verification
    event ResearcherVerificationAttested(
        address indexed researcher,
        uint64 attestationId
    );

    event VerificationAttested(
        address indexed researcher,
        uint64 attestationId
    );

    event ResearcherVerified(address indexed researcher);

    // Event to log the creation of new research
    event ResearchCreated(uint256 researchId, address researcher);

    function createResearch(
        string memory repo,
        uint256 invest,
        uint256 articlePrice,
        uint256 articlePriceIncreaseRate
    ) public {
        // Check if the sender is a verified researcher
        // if (!verifiedResearchers[msg.sender]) {
        //     revert NotAuthenticated();
        // }

        // // Ensure that the sender has not exceeded the research request cap
        // if (researchRequest[msg.sender].length >= 5) {
        //     revert ResearchCap();
        // }

        // The invest amount must be large enough to avoid issues with share price calculation.
        // This replaces the magic number 1e8 with a named constant for better readability.
        uint256 minInvest = 1e8;
        // if (invest < minInvest) {
        //     revert NotEnoughValue();
        // }

        // Calculate the sharePrice safely. Since invest >= minInvest, this won't divide by zero.
        uint256 sharePrice = invest / minInvest;

        // Proceed to create new research
        Research memory newResearch = Research({
            id: researchNumber,
            state: ResearchState.developing,
            investment: invest,
            articlePrice: articlePrice,
            sharePrice: sharePrice,
            articlePriceIncreaseRate: articlePriceIncreaseRate,
            funding: 0,
            profit: 0,
            owner: msg.sender,
            documentCID: repo
        });

        // Add the new research to the sender's list of research requests and to the global ID map.
        researchRequest[msg.sender].push(newResearch);
        researchById[researchNumber] = newResearch;

        // Emit an event for successful research creation before incrementing the researchNumber
        // to ensure that the event log and the state change are consistent.
        emit ResearchCreated(researchNumber, msg.sender);

        // Increment research ID for the next entry
        researchNumber++;

        // Linking research ID to the repository. This is done after the event emission
        // to ensure that all changes are logged correctly.
        repository[newResearch.id] = repo;
    }

    function isVerifiedResearcher(
        address researcher
    ) public view returns (bool) {
        return verifiedResearchers[researcher];
    }

    function verifyResearcher(address researcher) public onlyOwner {
        verifiedResearchers[researcher] = true;
        emit ResearcherVerified(researcher);
    }

    function attestResearcherVerification(address researcher) public onlyOwner {
        //test
        //ethereum sepolia
        // uint64 schemaId = 52;
        //arbitrum sepolia
        uint64 schemaId = 30;

        bytes[] memory recipients = new bytes[](1);
        recipients[0] = abi.encode(researcher);

        bytes memory encodedData = abi.encode(researcher, true);

        Attestation memory verificationAttestation = Attestation({
            schemaId: schemaId,
            linkedAttestationId: 0,
            attestTimestamp: 0,
            revokeTimestamp: 0,
            attester: address(this),
            validUntil: 0,
            dataLocation: DataLocation.ONCHAIN,
            revoked: false,
            recipients: recipients,
            data: encodedData
        });

        // Now we make the attestation call and obtain the attestationId
        uint64 attestationId = spInstance.attest(
            verificationAttestation,
            "",
            "",
            ""
        );

        // Store the attestationId in a mapping if needed
        researcherVerificationAttestations[researcher] = attestationId;

        // Emit an event for the attestation
        emit ResearcherVerificationAttested(researcher, attestationId);
    }

    //Research Author Attestation
    // Function to attest to or endorse the authorship of a research paper
    function attestResearchAuthor(
        uint256 researchId,
        string memory cid,
        uint64 linkedAttestationId // Use 0 if it's an initial attestation
    ) public {
        // Only the owner or a verified researcher can call this function
        require(
            msg.sender == owner() || verifiedResearchers[msg.sender],
            "Caller must be owner or verified researcher"
        );
        // Fetch the research details
        Research storage research = researchById[researchId];

        require(research.id != 0, "Research does not exist");

        //ethereum sepolia
        // uint64 schemaId = 67;
        //arbitrum sepolia
        uint64 schemaId = 31;

        // Encode the CID and the owner's address for saving to attestation.data
        // This encodes both the CID and the owner's address into a single bytes object
        bytes memory encodedData = abi.encode(cid, research.owner);

        // Prepare the recipients array
        bytes[] memory recipients = new bytes[](1);
        // Encoding the owner of the research as the recipient
        recipients[0] = abi.encode(research.owner);

        // Create the attestation or endorsement
        Attestation memory researchAttestation = Attestation({
            schemaId: schemaId,
            linkedAttestationId: linkedAttestationId, // This links to a previous attestation if it's an endorsement
            attestTimestamp: 0,
            revokeTimestamp: 0,
            //test
            attester: address(this),
            validUntil: 0, // Optional: set an expiration if required
            dataLocation: DataLocation.ONCHAIN,
            revoked: false,
            recipients: recipients,
            data: encodedData
        });

        // Make the attestation call and obtain the attestationId
        uint64 attestationId = spInstance.attest(
            researchAttestation,
            "",
            "",
            ""
        );

        // Emit an event for the attestation or endorsement
        emit VerificationAttested(msg.sender, attestationId);
    }

        function fundResearch (uint id, uint amount) public payable {
        if (msg.value < researchById[id].sharePrice * amount) revert NotEnoughValue();
        Research storage research = researchById[id];
        //changed this
        //_mint
       mint(msg.sender, id, amount, "");
        research.funding += msg.value;
        (bool success, ) = payable(researchOwner[id]).call{value: msg.value}("");
        if (!success) revert PaymentFailed();
        if (research.funding >= research.investment) researchById[id].state = ResearchState.developed;
    }

        function readArticle (uint id) public payable returns (string memory repo) {
        Research storage research = researchById[id];
        if (msg.value < research.articlePrice) revert NotEnoughValue();
        research.articlePrice *= (1 + (research.articlePriceIncreaseRate / 100));
        research.profit += msg.value;
        if (research.profit >= research.investment) {
         research.state = ResearchState.paid;
         research.articlePrice = 0;
        (bool success, ) = payable(msg.sender).call{value: research.profit - research.investment}("");
        if (!success) revert PaymentFailed();
        }
        return repository[id];
    }

    function redeemToken (uint id) public payable {
        Research storage research = researchById[id];
        if (research.state != ResearchState.paid) revert NotLiquidable();
        uint tokensOwned = balanceOf(msg.sender, id);
        if (tokensOwned == 0) revert NoTokenBalance();
        burn(msg.sender, id, tokensOwned);
        (bool success, ) = payable(msg.sender).call{value : research.sharePrice * tokensOwned}("");
        if (!success) revert PaymentFailed();
    }

    function setURI(string memory newuri) public onlyOwner {
        _setURI(newuri);
    }

    function pause() public onlyOwner {
        _pause();
    }

    function unpause() public onlyOwner {
        _unpause();
    }

    function mint(address account, uint256 id, uint256 amount, bytes memory data)
        internal
    {
        _mint(account, id, amount, data);
    }

    function mintBatch(address to, uint256[] memory ids, uint256[] memory amounts, bytes memory data)
        internal
    {
        _mintBatch(to, ids, amounts, data);
    }

    function _update(
        address from,
        address to,
        uint256[] memory ids,
        uint256[] memory values
    ) internal override(ERC1155, ERC1155Pausable) {
        // Custom logic before the balance update
        // For example, you can emit an event or perform checks

        // Call the parent contract's _update function to perform the actual balance update
        super._update(from, to, ids, values); // This calls ERC1155's _update function, and then ERC1155Pausable's _update if there's additional logic there
        // Custom logic after the balance update
        // For example, you can perform additional state changes or emit events
    }
}
