// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/// @title ZERK NETWORK LAWYER AND JUSTERS
/// @author soft.law --->>
///////////////////////////////////////
/////////////// WOLFHACK///////////////
///////////////////////////////////////
/// @notice This contract creates jusfifiers and lawyers, also the modifiers of those.
/// @dev This contract has all the modifiers.

///////////////////////////////////////
// ----------- CONTRACT ----------//
///////////////////////////////////////

contract ZerkJusterLawyer {
    ///////////////////////////////////////
    // ----------- ACCESS LEVELS ----------//
    ///////////////////////////////////////
    enum AccessLevel {
        None,
        //Juster
        Juster,
        //lawyer
        Lawyer,
        //zerk
        Owner
    }

    ///////////////////////////////////////
    // ----------- VARIABLES ----------//
    ///////////////////////////////////////
    struct Juster {
        uint id;
        string name;
        string jurisdiction;
        bool isValidated;
    }

    struct Lawyer {
        uint licenseNumber;
        string name;
        string jurisdiction;
        string especiality;
        bool isValidated;
    }

    uint public lastJusterId = 1;
    uint public lastLawyerId = 1;

    mapping(address => AccessLevel) public s_accessLevels;
    mapping(address => Juster) public s_justers;
    mapping(address => Lawyer) public s_lawyers;

    event MemberRemoved(address member);
    event LawyerAdded(address lawyer);
    event LawyerCreated(uint indexed lawyerId, address indexed lawyer);
    event LawyerModified(uint indexed lawyerId, address indexed lawyer);
    event JusterAdded(address juster);
    event JusterCreated(uint indexed justerId, address indexed juster);
    event JusterModified(uint indexed justerId, address indexed juster);

    address public owner;
    address[] public lawyers;
    address[] public justers;

    ///////////////////////////////////////
    // ----------- CONSTRUCTOR ----------//
    ///////////////////////////////////////
    constructor() {
        owner = msg.sender;
    }

    ///////////////////////////////////////
    // ----------- MODIFIERS ----------//
    ///////////////////////////////////////
    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner");
        _;
    }

    modifier onlyLawyer() {
        require(isLawyer(msg.sender), "Only a lawyer");
        _;
    }

    modifier onlyJuster() {
        require(isJuster(msg.sender), "Only a Juster");
        _;
    }

    ///////////////////////////////////////
    // ----------- MODIFIER FUNCTIONS ----------//
    ///////////////////////////////////////

    function delZerkAccess(address _member) public onlyOwner {
        s_accessLevels[_member] = AccessLevel.None;
        emit MemberRemoved(_member);
    }

    function addLawyer(address _lawyer) private onlyOwner {
        s_accessLevels[_lawyer] = AccessLevel.Lawyer;
        emit LawyerAdded(_lawyer);
    }

    function addJuster(address _juster) private onlyLawyer {
        s_accessLevels[_juster] = AccessLevel.Juster;
        emit JusterAdded(_juster);
    }

    ///////////////////////////////////////
    // ----------- FUNCTIONS ----------//
    ///////////////////////////////////////

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

        // add Lawyer to s_lawyers mapping
        s_lawyers[msg.sender] = newLawyer;

        // event: Lawyer Created
        emit LawyerCreated(lastLawyerId, msg.sender);

        // increment the lawyer ID
        lastLawyerId += 1;
    }

    function validateLawyer(uint _licenseNumber) public onlyOwner {
        // Verifies ID Lawyer exists in Lawyers array
        require(isLawyerAddressValid(msg.sender), "Invalid Lawyer Address");

        // Verifies the Lawyer isnt validated yet
        require(
            !s_lawyers[msg.sender].isValidated,
            "Lawyer is already validated"
        );

        // Marks Lawyers as Valid
        s_lawyers[msg.sender].isValidated = true;

        // Call addLawyer function
        addLawyer(msg.sender);

        // event: LawyerModfied
        emit LawyerModified(lastLawyerId, msg.sender);
    }

    ////////////////////////////////////////////
    /////Create JUSTER Function /////
    /////Public Function, anyone can be a Juster /////
    function createJuster(
        string memory _name,
        string memory _jurisdiction
    ) public {
        require(!s_justers[msg.sender].isValidated, "Juster already exists");

        Juster memory newJuster = Juster({
            id: lastJusterId,
            name: _name,
            jurisdiction: _jurisdiction,
            isValidated: false
        });

        // add Juster to s_justers mapping
        s_justers[msg.sender] = newJuster;

        // event: JusterCreated
        emit JusterCreated(lastJusterId, msg.sender);

        // increment the juster ID
        lastJusterId += 1;
    }

    /////Validate Juster Function /////
    /////Only Lawyer function /////

    function validateJuster(uint _justerId) public onlyLawyer {
        // Verifies ID Juster existes
        require(_justerId > 0 && _justerId < lastJusterId, "Invalid Juster ID");

        // Verifies the juster isnt validated yet
        require(
            !s_justers[getJusterAddress(_justerId)].isValidated,
            "Juster is already validated"
        );

        // Marks Justers as Valid
        s_justers[getJusterAddress(_justerId)].isValidated = true;

        // Call ddJuster function
        addJuster(getJusterAddress(_justerId));

        // event: JusterCreated
        emit JusterModified(lastJusterId, msg.sender);

        // Emitir evento o realizar otras acciones si es necesario
    }

    ////////////////////
    //READ FUNCTIONS//
    ///////////////////

    function getLawyerAddress(
        uint _licenseNumber
    ) public view returns (address) {
        require(
            _licenseNumber > 0 && _licenseNumber <= lastLawyerId,
            "Invalid Lawyer License Number"
        );
        return lawyers[_licenseNumber - 1];
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

    function getJusterAddress(uint _justerId) public view returns (address) {
        require(_justerId > 0 && _justerId < lastJusterId, "Invalid Juster ID");
        return justers[_justerId - 1];
    }

    function isLawyer(address _account) internal view returns (bool) {
        for (uint i = 0; i < lawyers.length; i++) {
            if (lawyers[i] == _account) {
                return true;
            }
        }
        return false;
    }

    function isJuster(address _account) internal view returns (bool) {
        for (uint i = 0; i < justers.length; i++) {
            if (justers[i] == _account) {
                return true;
            }
        }
        return false;
    }
}
