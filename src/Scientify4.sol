// SPDX-License-Identifier: MIT
pragma solidity ^0.8.25;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Pausable.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Burnable.sol";
import "@ethsign/sign-protocol-evm/src/interfaces/ISP.sol";
import "@ethsign/sign-protocol-evm/src/models/Attestation.sol";
import "@ethsign/sign-protocol-evm/src/models/DataLocation.sol";

contract Scientify is ERC1155, Ownable, ERC1155Pausable, ERC1155Burnable {
    error NotAuthenticated();
    error ResearchCap();
    error NotEnoughValue();
    error PaymentFailed();
    error NotLiquidable();
    error NoTokenBalance();

    uint256 researchNumber = 1;

    enum ResearchState {
        developing,
        developed,
        paid
    }

    struct Research {
        uint256 id;
        ResearchState state;
        uint256 investiment;
        uint256 articlePrice;
        uint256 sharePrice;
        uint256 articlePriceIncreaseRate;
        uint256 funding;
        uint256 profit;
        address owner;
        string documentCID; 
    }

    // mapping(string => address) public authenticatedResearchers;
    mapping(address => bool) public verifiedResearchers;
    mapping(address => uint64) public researcherVerificationAttestations;

    mapping(address => Research[]) public researchRequest;
    mapping(uint256 => Research) public researchById;
    mapping(uint256 => address) public researchOwner;
    mapping(uint256 => string) private repository;
    mapping(address => uint64) public authorAttestations; // Mapping to keep track of attestations linked by other authors

    ISP public spInstance;
    uint64 public schemaId;

    constructor() ERC1155("EURK") Ownable(msg.sender) {}

    function verifyResearcher(address researcher) public onlyOwner {
        verifiedResearchers[researcher] = true;
        attestVerificationStatus(researcher);
    }

    function attestVerificationStatus(address researcher) internal {
        bytes[] memory recipients = new bytes[](1);
        recipients[0] = abi.encode(researcher);

        Attestation memory verificationAttestation = Attestation({
            schemaId: schemaId,
            linkedAttestationId: 0,
            attestTimestamp: 0,
            revokeTimestamp: 0,
            attester: address(this),
            validUntil: 0,
            dataLocation: DataLocation.IPFS,
            revoked: false,
            recipients: recipients,
            data: abi.encodePacked("Researcher Verified: ", researcher)
        });

        uint64 attestationId = spInstance.attest(
            verificationAttestation,
            "",
            "",
            ""
        );
        researcherVerificationAttestations[researcher] = attestationId;
        emit VerificationAttested(researcher, attestationId);
    }

    event VerificationAttested(
        address indexed researcher,
        uint64 attestationId
    );

    function createResearch(
        string memory repo,
        uint256 invest,
        uint256 articlePrice,
        uint256 articlePriceIncreaseRate
    ) public {
        if (!verifiedResearchers[msg.sender]) revert NotAuthenticated();
        if (researchRequest[msg.sender].length > 4) revert ResearchCap();
        Research memory research = Research(
            researchNumber++,
            ResearchState.developing,
            invest,
            articlePrice,
            invest / 1e8,
            articlePriceIncreaseRate,
            0,
            0,
            msg.sender,
            repo
        );
        repository[research.id] = repo;
        researchRequest[msg.sender].push(research);
        researchById[research.id] = research;
        repo
    }

    function setSPInstance(address instance) external onlyOwner {
        spInstance = ISP(instance);
    }

    function setSchemaID(uint64 schemaId_) external onlyOwner {
        schemaId = schemaId_;
    }

    function attestAuthorship(
        string memory documentHash,
        uint64 linkedAttestationId
    ) external {
        require(
            msg.sender == owner() || authorAttestations[msg.sender] > 0,
            "Not authorized to attest"
        );

        bytes[] memory recipients = new bytes[](1);
        recipients[0] = abi.encode(msg.sender);

        Attestation memory a = Attestation({
            schemaId: schemaId,
            linkedAttestationId: linkedAttestationId,
            attestTimestamp: 0,
            revokeTimestamp: 0,
            attester: address(this),
            validUntil: 0,
            dataLocation: DataLocation.IPFS,
            revoked: false,
            recipients: recipients,
            data: abi.encode(documentHash)
        });

        uint64 attestationId = spInstance.attest(a, "", "", "");
        authorAttestations[msg.sender] = attestationId; // Update the mapping with the new attestation ID
        emit AuthorshipAttested(msg.sender, attestationId, documentHash);
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

    event AuthorshipAttested(
        address author,
        uint64 attestationId,
        string documentHash
    );
}
