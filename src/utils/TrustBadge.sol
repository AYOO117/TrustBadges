// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import {TrustBadgeUser} from "./TrustBadgeUser.sol";

contract TrustBadge is ERC721, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    mapping(address => TrustBadgeUser) public ownerToContract;

    constructor()
    ERC721("OwnerToken", "OT")
    Ownable(msg.sender)
    {}

    function generateOwnerId(address holder)
        internal
        returns (uint256)
    {
        uint256 newItemId = _tokenIds.current();
        _safeMint(holder, newItemId);
        _tokenIds.increment();
        return newItemId;
    }

    function CreateTrustBadgeUser(address owner, string memory name, string memory symbol) public returns (uint256) {
        uint256 newItemId = generateOwnerId(owner);
        TrustBadgeUser trustBadgeUser = new TrustBadgeUser(name, symbol, owner);
        ownerToContract[owner] = trustBadgeUser;
        return newItemId;
    }

    function addUser(address owner, address holder, string memory tokenURI) public returns(uint256) {
        TrustBadgeUser currentTrustBadgeUser = ownerToContract[owner];
        uint256 newItemId = currentTrustBadgeUser.generateICard(holder, tokenURI);
        return newItemId;
    }
}
