// SPDX-License-Identifier: MIT
pragma solidity ^0.8.25;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Pausable.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Burnable.sol";
import "@ethsign/sign-protocol-evm/src/interfaces/ISP.sol";
import "@ethsign/sign-protocol-evm/src/models/Attestation.sol";
import "@ethsign/sign-protocol-evm/src/models/DataLocation.sol";

//only Attest Researcher.
// Clean Copy
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
    mapping(uint256 => string) private repository;
    mapping(address => uint64) public researcherVerificationAttestations;

    ISP public spInstance;
    uint64 public schemaId;

    constructor() ERC1155("EURK") Ownable(msg.sender) {}

    function setSPInstance(address instance) external onlyOwner {
        //ETH Sepolia: 0x878c92FD89d8E0B93Dc0a3c907A2adc7577e39c5
        spInstance = ISP(instance);
    }

    function setSchemaID(uint64 schemaId_) external onlyOwner {
        schemaId = schemaId_;
    }

    function createResearch(
        string memory repo,
        uint256 invest,
        uint256 articlePrice,
        uint256 articlePriceIncreaseRate
    ) public {
        require(verifiedResearchers[msg.sender], "Not authenticated");
        if (researchRequest[msg.sender].length >= 5) revert ResearchCap();

        Research memory newResearch = Research(
            researchNumber,
            ResearchState.developing,
            invest,
            articlePrice,
            invest / 1e8, // Calculates sharePrice
            articlePriceIncreaseRate,
            0, // Initial funding
            0, // Initial profit
            msg.sender, // Owner of the research
            repo // Assuming 'repo' is the document's CID
        );
        researchRequest[msg.sender].push(newResearch);
        researchById[newResearch.id] = newResearch;
        researchNumber++; // Increment research ID for the next entry

        repository[newResearch.id] = repo; // Linking research ID to repository
    }

    function verifyResearcher(address researcher) public onlyOwner {
        verifiedResearchers[researcher] = true;
        attestResearcherVerification(researcher);
    }

    function attestResearcherVerification(address researcher) public onlyOwner {
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

    // Event to log the attestation of a researcher's verification
    event ResearcherVerificationAttested(
        address indexed researcher,
        uint64 attestationId
    );

    event VerificationAttested(
        address indexed researcher,
        uint64 attestationId
    );

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

        // Encode the CID for saving to attestation.data
        bytes memory encodedData = abi.encode(cid);

        // Prepare the recipients array
        bytes[] memory recipients = new bytes[](1);
        recipients[0] = abi.encode(research.owner); // Encoding the owner of the research as the recipient

        // Create the attestation or endorsement
        Attestation memory researchAttestation = Attestation({
            schemaId: schemaId,
            linkedAttestationId: linkedAttestationId, // This links to a previous attestation if it's an endorsement
            attestTimestamp: 0,
            revokeTimestamp: 0,
            attester: msg.sender,
            validUntil: 0, // Optional: set an expiration if required
            dataLocation: DataLocation.IPFS,
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
