// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract JusterContract {
    enum AccessLevel {
        None,
        Juster,
        Owner
    }

    struct Juster {
        uint id;
        string name;
        string jurisdiction;
        bool isValidated;
    }

    mapping(address => AccessLevel) public s_accessLevels;
    mapping(address => Juster) public s_justers;

    event MemberRemoved(address member);
    event JusterAdded(address juster);
    event JusterCreated(uint indexed justerId, address indexed juster);
    event JusterModified(uint indexed justerId, address indexed juster);

    address public owner;
    address[] public justers;

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner");
        _;
    }

    modifier onlyJuster() {
        require(isJuster(msg.sender), "Only a Juster");
        _;
    }

    function delZerkAccess(address _member) public onlyOwner {
        s_accessLevels[_member] = AccessLevel.None;
        emit MemberRemoved(_member);
    }

    function addJuster(address _juster) private onlyOwner {
        s_accessLevels[_juster] = AccessLevel.Juster;
        emit JusterAdded(_juster);
    }

    function createJuster(
        string memory _name,
        string memory _jurisdiction
    ) public {
        require(!s_justers[msg.sender].isValidated, "Juster already exists");

        Juster memory newJuster = Juster({
            id: justers.length + 1,
            name: _name,
            jurisdiction: _jurisdiction,
            isValidated: false
        });

        s_justers[msg.sender] = newJuster;
        emit JusterCreated(newJuster.id, msg.sender);

        addJuster(msg.sender);
    }

    function validateJuster(uint _justerId) public onlyOwner {
        require(
            _justerId > 0 && _justerId <= justers.length,
            "Invalid Juster ID"
        );

        require(
            !s_justers[getJusterAddress(_justerId)].isValidated,
            "Juster is already validated"
        );

        s_justers[getJusterAddress(_justerId)].isValidated = true;
        emit JusterModified(_justerId, msg.sender);
    }

    function getJusterAddress(uint _justerId) public view returns (address) {
        require(
            _justerId > 0 && _justerId <= justers.length,
            "Invalid Juster ID"
        );
        return justers[_justerId - 1];
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
