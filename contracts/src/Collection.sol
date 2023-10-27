// SPDX-License-Identifier: MIT
pragma solidity ^0.8;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "hardhat/console.sol";


contract Collection is ERC721URIStorage, Ownable {
  string public collectionName;
  int public cardCount;
  uint256 private _tokenIds = 0;

  // mapping(uint256 => address) private owners;
  mapping(address => uint256[]) private accountsTokens;

  constructor(address initialOwner, string memory _name, int _cardCount) Ownable(initialOwner) ERC721("PokemonCard", "PKMN") {
    collectionName = _name;
    cardCount = _cardCount;
    console.log("Collection created: ", collectionName);
  }

  function mintNFT(address recipient, string memory tokenURI)
      public onlyOwner
      returns (uint256)
  {
      _tokenIds++;

      uint256 newItemId = _tokenIds;
      _mint(recipient, newItemId);
      _setTokenURI(newItemId, tokenURI);
      console.log("Minted: ", tokenURI, newItemId);
      return newItemId;
  }
}
