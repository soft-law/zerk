//SPDX-License-Identifier: MIT
pragma solidity ^0.8.21;

import { IAxelarGateway } from "@axelar-network/axelar-gmp-sdk-solidity/contracts/interfaces/IAxelarGateway.sol";
import { IAxelarGasService } from "@axelar-network/axelar-gmp-sdk-solidity/contracts/interfaces/IAxelarGasService.sol";

contract autoTokenSatellite {
  IAxelarGateway immutable gateway;
  IAxelarGasService immutable gasService;

  constructor() {
    gateway = IAxelarGateway(0xBF62ef1486468a6bd26Dd669C06db43dEd5B849B);
    gasService = IAxelarGasService(0xbE406F0189A0B4cf3A05C286473D23791Dd44Cc6);
  }

  function createAutoken(
    string calldata destinationChain,
    string calldata destinationAddress,
    string calldata walletAddress,
    string calldata vin,
    string calldata tokenURI
  ) external payable {
    require(msg.value > 0, "Gas payment is required");
    bytes memory payload = abi.encode(walletAddress, vin, tokenURI);
    gasService.payNativeGasForContractCall{ value: msg.value }(
      address(this),
      destinationChain,
      destinationAddress,
      payload,
      msg.sender
    );
    gateway.callContract(destinationChain, destinationAddress, payload);
  }
}
