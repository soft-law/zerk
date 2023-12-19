// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/// @title ZERK NETWORK LAWYER AND JUSTERS
/// @author soft.law --->>
///////////////////////////////////////
/////////////// WOLFHACK///////////////
///////////////////////////////////////
/// @notice This contract creates jusfifiers and lawyers, also the modifiers of those.
/// @dev This contract has all the modifiers.

contract LawyerJusterContract {
    ///----- ENUMS -----///
    enum AccessLevel {
        None,
        Juster,
        Lawyer,
        Owner
    }
    address public owner;
    mapping(address => AccessLevel) public s_accessLevels;

    ///----- LAWYERS VARIABLES -----///
    address[] public lawyers;
    mapping(address => Lawyer) public s_lawyers;

    struct Lawyer {
        uint licenseNumber;
        string name;
        string jurisdiction;
        string especiality;
        bool isValidated;
    }

    event LawyerCreated(address lawyer);
    event LawyerValidated(address lawyer);
    event LawyerAdded(address lawyer);
    event LawyerRemoved(address lawyer);

    ///----- JUSTERS VARIABLES -----///
    address[] public justers;
    mapping(address => Juster) public s_justers;

    struct Juster {
        string passportNumber;
        string name;
        string jurisdiction;
        bool isValidated;
    }

    event JusterRemoved(address juster);
    event JusterAdded(address juster);
    event JusterCreated(address juster);
    event JusterValidated(address lawyer);

    ///////////////////////////////////////
    // ----------- CONSTRUCTOR ----------//
    ///////////////////////////////////////
    constructor() {
        owner = msg.sender;
    }

    /////////////////////////////////
    ///-----MODIFIERS-----///
    /////////////////////////////////
    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner");
        _;
    }

    function getAccessLevel(
        address account
    ) internal view returns (AccessLevel) {
        if (account == owner) {
            return AccessLevel.Owner;
        } else if (isLawyer(account)) {
            return AccessLevel.Lawyer;
        } else if (isJuster(account)) {
            return AccessLevel.Juster;
        } else {
            return AccessLevel.None;
        }
    }

    modifier onlyLawyer() {
        require(
            getAccessLevel(msg.sender) == AccessLevel.Lawyer,
            "Solo abogado"
        );
        _;
    }

    function isLawyer(address _lawyerAddress) internal view returns (bool) {
        for (uint i = 0; i < lawyers.length; i++) {
            if (lawyers[i] == _lawyerAddress) {
                return true;
            }
        }
        return false;
    }

    modifier onlyJuster() {
        require(
            getAccessLevel(msg.sender) == AccessLevel.Juster,
            "Solo Juster"
        );
        _;
    }

    function isJuster(address _justerAddress) internal view returns (bool) {
        for (uint i = 0; i < justers.length; i++) {
            if (justers[i] == _justerAddress) {
                return true;
            }
        }
        return false;
    }

    /////////////////////////////////
    ///-----LAWYER FUNCTIONS -----///
    /////////////////////////////////
    function delLawyer(address _lawyerAdress) public onlyOwner {
        s_accessLevels[_lawyerAdress] = AccessLevel.None;
        s_lawyers[_lawyerAdress].isValidated = true;

        emit LawyerRemoved(_lawyerAdress);
    }

    function addLawyer(address _lawyerAdress) private onlyOwner {
        s_accessLevels[_lawyerAdress] = AccessLevel.Lawyer;
        emit LawyerAdded(_lawyerAdress);
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
        emit LawyerCreated(msg.sender);
    }

    function validateLawyer(address _lawyerAdress) public onlyOwner {
        require(
            !s_lawyers[_lawyerAdress].isValidated,
            "Lawyer is already validated"
        );

        s_lawyers[_lawyerAdress].isValidated = true;

        s_accessLevels[_lawyerAdress] = AccessLevel.Lawyer;
        emit LawyerValidated(_lawyerAdress);
    }

    ///Need to make a functions taht return all lawyers addressess

    /////////////////////////////////
    //-----JUSTERS FUNCTIONS -----//
    /////////////////////////////////
    function createJuster(
        string memory _passportNumber,
        string memory _name,
        string memory _jurisdiction
    ) public {
        require(!s_justers[msg.sender].isValidated, "Juster already exists");

        Juster memory newJuster = Juster({
            passportNumber: _passportNumber,
            name: _name,
            jurisdiction: _jurisdiction,
            isValidated: false
        });

        s_justers[msg.sender] = newJuster;
        emit JusterCreated(msg.sender);
    }

    function validateJuster(address _justerAdress) public onlyLawyer {
        require(
            !s_justers[_justerAdress].isValidated,
            "Juster is already validated"
        );

        s_justers[_justerAdress].isValidated = true;

        s_accessLevels[_justerAdress] = AccessLevel.Juster;
        emit JusterValidated(_justerAdress);
    }
}
