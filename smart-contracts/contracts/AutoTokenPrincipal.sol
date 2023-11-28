// SPDX-License-Identifier: Unlicense

pragma solidity ^0.8.21;
import { RMRKMultiAssetPreMint } from "@rmrk-team/evm-contracts/contracts/implementations/premint/RMRKMultiAssetPreMint.sol";
import { RotamAccess } from "./rtmAccess.sol";
import { AxelarExecutable } from "@axelar-network/axelar-gmp-sdk-solidity/contracts/executable/AxelarExecutable.sol";
import { IAxelarGateway } from "@axelar-network/axelar-gmp-sdk-solidity/contracts/interfaces/IAxelarGateway.sol";
import { IAxelarGasService } from "@axelar-network/axelar-gmp-sdk-solidity/contracts/interfaces/IAxelarGasService.sol";
import { StringToAddress, AddressToString } from "@axelar-network/axelar-gmp-sdk-solidity/contracts/libs/AddressString.sol";

contract CrossChainAutoTokenPrincipal is
  AxelarExecutable,
  RMRKMultiAssetPreMint
{
  mapping(string => uint256) private vinToTokenId;
  mapping(string => bool) private isVinUsed;

  IAxelarGasService immutable gasService;

  constructor(
    string memory collectionMetadata,
    uint256 maxSupply,
    address royaltyRecipient,
    uint16 royaltyPercentageBps
  )
    AxelarExecutable(0x5769D84DD62a6fD969856c75c7D321b84d455929)
    RMRKMultiAssetPreMint(
      "autoToken",
      "auto",
      collectionMetadata,
      maxSupply,
      royaltyRecipient,
      royaltyPercentageBps
    )
  {
    gasService = IAxelarGasService(0xbE406F0189A0B4cf3A05C286473D23791Dd44Cc6);
  }

  event Executed();

  error InvalidAddressString();

  using AddressToString for address;
  using StringToAddress for string;

  function toString(address address_) external pure returns (string memory) {
    return address_.toString();
  }

  // function addressToString(
  //   address address_
  // ) external pure returns (string memory) {
  //   AddressToString.toString(address_);
  // }

  // function walletToAddress(
  //   string memory address_
  // ) internal pure returns (address) {
  //   StringToAddress.toAddress(address_);
  // }

  function toAddress(
    string memory addressString
  ) internal pure returns (address) {
    bytes memory stringBytes = bytes(addressString);
    uint160 addressNumber = 0;
    uint8 stringByte;

    if (
      stringBytes.length != 42 || stringBytes[0] != "0" || stringBytes[1] != "x"
    ) revert InvalidAddressString();

    for (uint256 i = 2; i < 42; ++i) {
      stringByte = uint8(stringBytes[i]);

      if ((stringByte >= 97) && (stringByte <= 102)) stringByte -= 87;
      else if ((stringByte >= 65) && (stringByte <= 70)) stringByte -= 55;
      else if ((stringByte >= 48) && (stringByte <= 57)) stringByte -= 48;
      else revert InvalidAddressString();

      addressNumber |= uint160(uint256(stringByte) << ((41 - i) << 2));
    }

    return address(addressNumber);
  }

  function createAutoToken(
    address to,
    uint256 numToMint,
    string memory tokenURI,
    string memory vin
  ) public virtual returns (uint256) {
    (uint256 nextToken, uint256 totalSupplyOffset) = _prepareMint(numToMint);

    require(isVinUsed[vin] == false, "Car with this VIN already exists");
    for (uint256 i = nextToken; i < totalSupplyOffset; ) {
      _setTokenURI(i, tokenURI);
      vinToTokenId[vin] = i;
      _safeMint(to, i, "");
      unchecked {
        ++i;
      }
      isVinUsed[vin] = true;
    }
    return nextToken;
  }

  function getTokenIdByVin(string memory vin) public view returns (uint256) {
    return vinToTokenId[vin];
  }

  function getTokenURIByVIN(
    string memory vin
  ) public view returns (string memory) {
    uint256 tokenId = getTokenIdByVin(vin);
    return tokenURI(tokenId);
  }

  function getAssetMetadataWithVIN(
    string memory vin,
    uint64 assetId
  ) public view virtual returns (string memory) {
    uint256 tokenId = getTokenIdByVin(vin);
    return getAssetMetadata(tokenId, assetId);
  }

  function getActiveAssetsIdsWithVIN(
    string memory vin
  ) public view virtual returns (uint64[] memory) {
    uint256 tokenId = getTokenIdByVin(vin);
    return getActiveAssets(tokenId);
  }

  function getAllAssetsMetadata(
    string memory vin
  ) public view virtual returns (string[] memory) {
    uint256 tokenId = getTokenIdByVin(vin);
    uint64[] memory activeAssets = getActiveAssets(tokenId);
    string[] memory assetsMetadata = new string[](activeAssets.length);
    for (uint i = 0; i < activeAssets.length; i++) {
      string memory assetMetadata = getAssetMetadata(tokenId, activeAssets[i]);
      assetsMetadata[i] = assetMetadata;
    }
    return assetsMetadata;
  }

  function _execute(
    string calldata sourceChain_,
    string calldata sourceAddress_,
    bytes calldata payload
  ) internal override {
    (
      string memory walletAddress,
      string memory vin,
      string memory tokenURI
    ) = abi.decode(payload, (string, string, string));

    createAutoToken(toAddress(walletAddress), 1, tokenURI, vin);
    // createAutoToken(walletToAddress(walletAddress), 1, tokenURI, vin);
    emit Executed();
  }
}
