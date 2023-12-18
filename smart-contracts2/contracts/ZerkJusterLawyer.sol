// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract ZerkJusterLawyer {
    //----- Access Levels -----//
    enum AccessLevel {
        None,
        //Juster
        Juster,
        //lawyer
        Lawyer,
        //zerk
        Owner
    }

    uint public nextJusterId = 1;

    //------Structs ------//
    struct Juster {
        uint id;
        string firstName;
        string lastName;
        bool isValidated;
    }

    mapping(address => Juster) public s_justers;
    mapping(address => AccessLevel) public accessLevels;

    event MemberRemoved(address member);
    event LawyerAdded(address lawyer);
    event JusterAdded(address juster);
    event JusterCreated(uint indexed justerId, address indexed juster);

    address public owner;
    address public lawyer;
    address public juster;

    constructor() {
        owner = msg.sender;
        accessLevels[msg.sender] = AccessLevel.Owner;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner");
        _;
    }

    modifier onlyLawyer() {
        require(msg.sender == lawyer, "Only lawyer");
        _;
    }

    modifier onlyJuster() {
        require(msg.sender == juster, "Only juster");
        _;
    }

    function delZerkAccess(address _member) public onlyOwner {
        accessLevels[_member] = AccessLevel.None;
        emit MemberRemoved(_member);
    }

    function addLawyer(address _lawyer) public onlyOwner {
        accessLevels[_lawyer] = AccessLevel.Lawyer;
        emit LawyerAdded(_lawyer);
    }

    function addJuster(address _juster) public onlyOwner {
        accessLevels[_juster] = AccessLevel.Juster;
        emit JusterAdded(_juster);
    }

    // ----------- Functions ----------//

    /////Create Juster Function /////
    /////Public Function, anyone can be a Juster /////
    function createJuster(
        string memory _firstName,
        string memory _lastName
    ) public {
        require(!s_justers[msg.sender].isValidated, "Juster already exists");

        Juster memory newJuster = Juster({
            id: nextJusterId,
            firstName: _firstName,
            lastName: _lastName,
            isValidated: false
        });

        // add Juster to s_justers mapping
        s_justers[msg.sender] = newJuster;

        // event: JusterCreated
        emit JusterCreated(nextJusterId, msg.sender);

        // increment the next ID
        nextJusterId += 1;

        // Llamar a la función addJuster
        addJuster(msg.sender);
    }
}
