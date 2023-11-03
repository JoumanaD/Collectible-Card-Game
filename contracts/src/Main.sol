// SPDX-License-Identifier: MIT
pragma solidity ^0.8;

import "@openzeppelin/contracts/access/Ownable.sol";
import "./Collection.sol";
import "hardhat/console.sol";

contract Main is Ownable {
  int private count;
  mapping(int => Collection) private collections;
  address[] public owners;
  mapping(address => bool) ownerExists;

  constructor() Ownable(0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266) {
    count = 0;
  }

  function createCollection(string calldata name, int cardCount) external onlyOwner {
    address initialOwner = address(this);
    collections[count++] = new Collection(initialOwner, name, cardCount);
  }

  function mintCard(int collectionId, address recipient, string memory tokenURI)
    external onlyOwner
    returns(uint256)
  {
    if(!ownerExists[recipient]) {
      owners.push(recipient);
      ownerExists[recipient] = true;
    }
    uint256 tokenId = collections[collectionId].mintNFT(recipient, tokenURI);
    return tokenId;
  }

  function getOwners() public view returns(address[] memory){
    return owners;
  }
  function balanceOf(address owner) public view returns(uint[] memory){
    uint [] memory res = new uint[](uint(count));
    for(int i =0;i<count;i++){
      res[uint(i)]= collections[i].balanceOf(owner);
    }
    return res;
  }

  function tokenOfOwnerByIndex(int collectionId, address owner, uint i)
    external view
    returns(uint256){
    return collections[collectionId].tokenOfOwnerByIndex(owner, i);
  }

}
