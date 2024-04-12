// SPDX-License-Identifier: MIT
pragma solidity ^0.8.25;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Pausable.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Burnable.sol";

contract Scientify is ERC1155, Ownable, ERC1155Pausable, ERC1155Burnable {

    error NotAuthenticated();
    error ResearchCap();
    error NotEnoughValue();
    error PaymentFailed();
    error NotLiquidable();
    error NoTokenBalance();

    uint researchNumber = 1;

    enum ResearchState {developing, developed, paid}

    struct Research {
        uint id;
        ResearchState state;
        uint investiment;
        uint articlePrice;
        uint sharePrice;
        uint articlePriceIncreaseRate; 
        uint funding;
        uint profit;
        address owner;
    }

    mapping (string => address) public authenticatedResearchers;
    mapping (address => Research[]) public researchRequest;
    mapping (uint => Research) public researchById;
    mapping (uint => address) public researchOwner;
    mapping (uint => string) private repository;

    constructor() ERC1155("EURK") Ownable(msg.sender) {}

    function authenticateUser (string memory proof) public {
        authenticatedResearchers[proof] = msg.sender;
    }

    function createResearch (string memory authentication, string memory repo, uint invest, uint articlePrice, uint articlePriceIncreaseRate) public {
        if (authenticatedResearchers[authentication] != msg.sender) revert NotAuthenticated();
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
            msg.sender
        );
        repository[research.id] = repo;
        researchRequest[msg.sender].push(research);
        researchById[research.id] = research;
    }

    function fundResearch (uint id, uint amount) public payable {
        if (msg.value < researchById[id].sharePrice * amount) revert NotEnoughValue();
        Research storage research = researchById[id];
        mint(msg.sender, id, amount, "");
        research.funding += msg.value;
        (bool success, ) = payable(researchOwner[id]).call{value: msg.value}("");
        if (!success) revert PaymentFailed();
        if (research.funding >= research.investiment) researchById[id].state = ResearchState.developed;
    }

    function readArticle (uint id) public payable returns (string memory repo) {
        Research storage research = researchById[id];
        if (msg.value < research.articlePrice) revert NotEnoughValue();
        research.articlePrice *= (1 + (research.articlePriceIncreaseRate / 100));
        research.profit += msg.value;
        if (research.profit >= research.investiment) {
         research.state = ResearchState.paid;
         research.articlePrice = 0;
        (bool success, ) = payable(msg.sender).call{value: research.profit - research.investiment}("");
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

    // The following functions are overrides required by Solidity.

    function _update(address from, address to, uint256[] memory ids, uint256[] memory values)
        internal
        override(ERC1155, ERC1155Pausable)
    {
        super._update(from, to, ids, values);
    }
}
