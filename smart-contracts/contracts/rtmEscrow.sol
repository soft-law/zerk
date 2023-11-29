//SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.21;

import "./rtmAccess.sol";

interface IERC5773 {
  function transferFrom(address _from, address _to, uint256 _id) external;
}

contract EscrowAutoToken {
  address public nftAddress;
  address public lender;
  uint256 public nftID;
  uint256 public lastPurchasePrice;
  uint256 public escrowAmount;
  address payable public buyer;
  address payable public seller;
  address public legalInspector;
  address public mechanicInspector;
  address public aesteticInspector;
  address public royaltyRecipient;
  uint256 public royaltyPercentageBps;

  modifier onlyBuyer() {
    require(msg.sender == buyer, "Only buyer can call this function");
    _;
  }

  modifier onlyLawyer() {
    require(msg.sender == legalInspector, "Only buyer can call this function");
    _;
  }

  modifier onlyMechanic() {
    require(
      msg.sender == mechanicInspector,
      "Only buyer can call this function"
    );
    _;
  }

  modifier onlyAestetic() {
    require(
      msg.sender == aesteticInspector,
      "Only buyer can call this function"
    );
    _;
  }

  bool public legalInspectionPassed = false;
  bool public mechanicInspectionPassed = false;
  bool public aesteticInspectionPassed = false;

  constructor(
    address _nftAddress,
    uint256 _escrowAmount,
    address _royaltyRecipient,
    uint256 _royaltyPercentageBps,
    address payable _buyer,
    address _mechanicInspector,
    address _legalInspector,
    address _aesteticInspector,
    uint256 _nftID
  ) {
    nftAddress = _nftAddress;
    escrowAmount = _escrowAmount;
    royaltyRecipient = _royaltyRecipient;
    royaltyPercentageBps = _royaltyPercentageBps;
    buyer = _buyer;
    mechanicInspector = _mechanicInspector;
    legalInspector = _legalInspector;
    aesteticInspector = _aesteticInspector;
    nftID = _nftID;
  }

  function depositEarnest() public payable onlyBuyer {
    require(msg.value >= escrowAmount);
  }

  function updateLegalInspectionStatus(bool _passed) public onlyLawyer {
    legalInspectionPassed = _passed;
  }

  function updateMechanicInspectionStatus(bool _passed) public onlyMechanic {
    mechanicInspectionPassed = _passed;
  }

  function updateAesteticInspectionStatus(bool _passed) public onlyAestetic {
    aesteticInspectionPassed = _passed;
  }

  function getBalance() public view returns (uint) {
    return address(this).balance;
  }

  function finalizeSale(
    address payable _seller,
    address payable _buyer,
    uint256 _purchasePrice
  ) public {
    seller = _seller;
    buyer = _buyer;
    lastPurchasePrice = _purchasePrice;

    //Transfer ownership of autoToken
    IERC5773(nftAddress).transferFrom(seller, buyer, nftID);
  }
}
