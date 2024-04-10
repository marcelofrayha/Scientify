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

    uint researchNumber;

    enum ResearchState {developing, developed, paid}

    struct Research {
        uint id;
        ResearchState state;
        string repository;
        uint investiment;
        uint articlePrice;
    }

    mapping (string => address) public authenticatedResearchers;
    mapping (address => Research[]) public researchRequest;
    mapping (uint => Research) public researchById;

    constructor() ERC1155("EURK") Ownable(msg.sender) {}

    function authenticateUser (string memory proof) public {
        authenticatedResearchers[proof] = msg.sender;
    }

    function createResearch (string memory authentication, string memory repo, uint invest, uint articlePrice) public {
        if (authenticatedResearchers[authentication] != msg.sender) revert NotAuthenticated();
        if (researchRequest[msg.sender].length > 4) revert ResearchCap();
        Research memory research = Research(
            researchNumber++,
            ResearchState.developing,
            repo,
            invest,
            articlePrice
        );
        researchRequest[msg.sender].push(research);
        researchById[research.id] = research;
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
        public
    {
        _mint(account, id, amount, data);
    }

    function mintBatch(address to, uint256[] memory ids, uint256[] memory amounts, bytes memory data)
        public
    {
        _mintBatch(to, ids, amounts, data);
    }

    // The following functions are overrides required by Solidity.

    function _update(address from, address to, uint256[] memory ids, uint256[] memory values)
        internal
        override(ERC1155, ERC1155Pausable)
    {
        for (uint i; i < ids.length; i++) {
            if (researchById[ids[i]].articlePrice > msg.value) revert NotEnoughValue();
        }
        super._update(from, to, ids, values);
    }
}
