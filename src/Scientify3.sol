// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

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

    uint researchNumber = 1;

    enum ResearchState {
        developing,
        developed,
        paid
    }

    struct Research {
        uint id;
        ResearchState state;
        uint investment;
        uint articlePrice;
        uint sharePrice;
        uint articlePriceIncreaseRate;
        uint funding;
        uint profit;
        address owner;
        string documentCID
    }

    ISP public spInstance;
    uint64 public schemaId;

    mapping(string => address) public authenticatedResearchers;
    mapping(address => Research[]) public researchRequest;
    mapping(uint => Research) public researchById;
    mapping(uint => address) public researchOwner;
    mapping(uint => string) private repository;
    mapping(uint => uint64) public attestationIdsByResearchId;

    constructor() ERC1155("EURK") Ownable(msg.sender) {}

    function authenticateUser(string memory proof) public {
        authenticatedResearchers[proof] = msg.sender;
    }

    function createResearch(
    string memory authentication,
    string memory repo,
    uint invest,
    uint articlePrice,
    uint articlePriceIncreaseRate
) public {
    if (authenticatedResearchers[authentication] != msg.sender)
        revert NotAuthenticated();
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
        repo // Assuming 'repo' is the document's CID
    );
    researchRequest[msg.sender].push(research);
    researchById[research.id] = research;
    }

    function setSPInstance(address instance) external onlyOwner {
        spInstance = ISP(instance);
    }

    function setSchemaID(uint64 schemaId_) external onlyOwner {
        schemaId = schemaId_;
    }

    function attestAuthorship(
        uint researchId,
        string memory documentHash,
        uint64 linkedAttestationId
    ) public returns (uint64) {
        require(researchById[researchId].id != 0, "Research ID does not exist");
        // require(spInstance.exists(linkedAttestationId), "Linked attestation ID does not exist");

        bytes[] memory recipients = new bytes[](1);
        recipients[0] = abi.encode(msg.sender);

        Attestation memory a = Attestation({
            schemaId: schemaId,
            linkedAttestationId: linkedAttestationId,
            attestTimestamp: 0,
            revokeTimestamp: 0,
            attester: msg.sender,
            validUntil: 0,
            dataLocation: DataLocation.IPFS,
            revoked: false,
            recipients: recipients,
            data: abi.encode(documentHash)
        });

        uint64 attestationId = spInstance.attest(a, "", "", "");
        attestationIdsByResearchId[researchId] = attestationId;
        emit AuthorshipAttested(msg.sender, attestationId, documentHash);
        return attestationId;
    }

    // Override the _update function to add custom logic
    function _update(
        address from,
        address to,
        uint256[] memory ids,
        uint256[] memory values
    ) internal override(ERC1155, ERC1155Pausable) {
        // Custom logic before the balance update
        // For example, you can emit an event or perform checks

        // Call the parent contract's _update function to perform the actual balance update
        super._update(from, to, ids, values);

        // Custom logic after the balance update
        // For example, you can perform additional state changes or emit events
    }

    // Other functions remain unchanged...

    event AuthorshipAttested(
        address author,
        uint64 attestationId,
        string documentHash
    );
}
