// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract LawyerJusterContract {
    enum AccessLevel {
        None,
        Juster,
        Lawyer,
        Owner
    }

    address public owner;
    mapping(address => AccessLevel) public s_accessLevels;

    struct Lawyer {
        uint licenseNumber;
        string name;
        string jurisdiction;
        string speciality;
        bool isValidated;
    }

    event LawyerCreated(address lawyer);
    event LawyerValidated(address lawyer);
    event LawyerAdded(address lawyer);
    event LawyerRemoved(address lawyer);

    // address[] public lawyers;
    mapping(address => Lawyer) public s_lawyers;

    struct Juster {
        string passportNumber;
        string name;
        string jurisdiction;
        bool isValidated;
    }

    event JusterRemoved(address juster);
    event JusterAdded(address juster);
    event JusterCreated(address juster);
    event JusterValidated(address juster);

    // address[] public justers;
    mapping(address => Juster) public s_justers;

    constructor() {
        owner = msg.sender;
        s_accessLevels[owner] = AccessLevel.Owner;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner");
        _;
    }

    modifier onlyLawyer() {
        require(
            getAccessLevel(msg.sender) == AccessLevel.Lawyer,
            "Only lawyer"
        );
        _;
    }

    modifier onlyJuster() {
        require(
            getAccessLevel(msg.sender) == AccessLevel.Juster,
            "Only Juster"
        );
        _;
    }

    function getAccessLevel(
        address account
    ) internal view returns (AccessLevel) {
        return s_accessLevels[account];
    }

    function isLawyer(address _lawyerAddress) internal view returns (bool) {
        return s_accessLevels[_lawyerAddress] == AccessLevel.Lawyer;
    }

    function isJuster(address _justerAddress) internal view returns (bool) {
        return s_accessLevels[_justerAddress] == AccessLevel.Juster;
    }

    function delLawyer(address _lawyerAddress) public onlyOwner {
        s_accessLevels[_lawyerAddress] = AccessLevel.None;
        s_lawyers[_lawyerAddress].isValidated = false;
        emit LawyerRemoved(_lawyerAddress);
    }

    function addLawyer(address _lawyerAddress) public onlyOwner {
        s_accessLevels[_lawyerAddress] = AccessLevel.Lawyer;
        emit LawyerAdded(_lawyerAddress);
    }

    function createLawyer(
        uint _licenseNumber,
        string memory _name,
        string memory _jurisdiction,
        string memory _speciality
    ) public {
        require(!s_lawyers[msg.sender].isValidated, "Lawyer already exists");

        Lawyer memory newLawyer = Lawyer({
            licenseNumber: _licenseNumber,
            name: _name,
            jurisdiction: _jurisdiction,
            speciality: _speciality,
            isValidated: false
        });

        s_lawyers[msg.sender] = newLawyer;
        emit LawyerCreated(msg.sender);
    }

    function validateLawyer(address _lawyerAddress) public onlyOwner {
        // require(isLawyer(_lawyerAddress), "Not a lawyer");
        require(
            !s_lawyers[_lawyerAddress].isValidated,
            "Lawyer is already validated"
        );
        s_accessLevels[_lawyerAddress] = AccessLevel.Lawyer;
        s_lawyers[_lawyerAddress].isValidated = true;
        emit LawyerValidated(_lawyerAddress);
    }

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

    function validateJuster(address _justerAddress) public onlyLawyer {
        require(
            !s_justers[_justerAddress].isValidated,
            "Juster is already validated"
        );

        s_justers[_justerAddress].isValidated = true;
        s_accessLevels[_justerAddress] = AccessLevel.Juster;
        emit JusterValidated(_justerAddress);
    }
}
