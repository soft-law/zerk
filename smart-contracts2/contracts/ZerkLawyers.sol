// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract LawyerContract {
    ///-----VARIABLES -----///
    enum AccessLevel {
        None,
        Lawyer,
        Owner
    }

    struct Lawyer {
        uint licenseNumber;
        string name;
        string jurisdiction;
        string especiality;
        bool isValidated;
    }

    mapping(address => AccessLevel) public s_accessLevels;
    mapping(address => Lawyer) public s_lawyers;

    event LawyerCreated(uint indexed lawyerId, address indexed lawyer);
    event LawyerModified(uint indexed lawyerId, address indexed lawyer);
    event LawyerAdded(address lawyer);
    event LawyerRemoved(address lawyer);

    address public owner;
    address[] public lawyers;

    ///////////////////////////////////////
    // ----------- CONSTRUCTOR ----------//
    ///////////////////////////////////////
    constructor() {
        owner = msg.sender;
    }

    ///-----MODIFIERS-----///
    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner");
        _;
    }

    modifier onlyLawyer() {
        require(isLawyer(msg.sender), "Only a lawyer");
        _;
    }

    ///-----FUNCTIONS -----///
    function delLawyer(address _lawyer) public onlyOwner {
        s_accessLevels[_lawyer] = AccessLevel.None;
        emit LawyerRemoved(_lawyer);
    }

    function addLawyer(address _lawyer) private onlyOwner {
        s_accessLevels[_lawyer] = AccessLevel.Lawyer;
        emit LawyerAdded(_lawyer);
    }

    function createLawyer(
        uint _licenseNumber,
        string memory _name,
        string memory _jurisdiction,
        string memory _especiality
    ) public {
        require(!s_lawyers[msg.sender].isValidated, "Lawyer already exists");

        Lawyer memory newLawyer = Lawyer({
            licenseNumber: _licenseNumber,
            name: _name,
            jurisdiction: _jurisdiction,
            especiality: _especiality,
            isValidated: false
        });

        s_lawyers[msg.sender] = newLawyer;
        emit LawyerCreated(_licenseNumber, msg.sender);
    }

    function validateLawyer(uint _licenseNumber) public onlyOwner {
        require(isLawyerAddressValid(msg.sender), "Invalid Lawyer Address");
        address lawyerAddress = getLawyerAddress(_licenseNumber);

        require(
            !s_lawyers[lawyerAddress].isValidated,
            "Lawyer is already validated"
        );

        s_lawyers[lawyerAddress].isValidated = true;
        emit LawyerModified(_licenseNumber, lawyerAddress);
        addLawyer(msg.sender);
    }

    function getLawyerAddress(
        uint _licenseNumber
    ) public view returns (address) {
        for (uint i = 0; i < lawyers.length; i++) {
            if (s_lawyers[lawyers[i]].licenseNumber == _licenseNumber) {
                return lawyers[i];
            }
        }

        // Si no se encuentra el número de licencia, devolver address(0)
        return address(0);
    }

    function isLawyerAddressValid(
        address _lawyerAddress
    ) internal view returns (bool) {
        for (uint i = 0; i < lawyers.length; i++) {
            if (lawyers[i] == _lawyerAddress) {
                return true;
            }
        }
        return false;
    }

    function isLawyer(address _account) internal view returns (bool) {
        for (uint i = 0; i < lawyers.length; i++) {
            if (lawyers[i] == _account) {
                return true;
            }
        }
        return false;
    }
}
