// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

// Importa el contrato correctamente
import "./ZerkLawyerJuster.sol";

contract ZerkCase is LawyerJusterContract {
    struct Case {
        uint id;
        string caseNumber;
        string caseJurisdiction;
        uint price;
        address currentCase;
        string description;
        uint justerId;
        bool isValidated;
    }

    uint public nextCaseId = 1;

    address public accessContractAddress;

    //----- Mappings & Enums -----//
    mapping(address => Case) public s_cases;
    mapping(uint => address) public caseToJuster;

    //----Events----//
    event CaseCreated(uint indexed caseId, address indexed caso);

    //------Constructor ------//
    constructor(address _accessContractAddress) LawyerJusterContract() {
        accessContractAddress = _accessContractAddress;
    }

    function createCase(
        string memory _caseNumber,
        string memory _caseJurisdiction,
        uint _price,
        string memory _description,
        uint _justerId
    ) public onlyJuster {
        require(
            s_justers[caseToJuster[_justerId]].isValidated,
            "Juster must be validated"
        );

        Case memory newCase = Case({
            id: nextCaseId,
            caseNumber: _caseNumber,
            caseJurisdiction: _caseJurisdiction,
            price: _price,
            currentCase: msg.sender,
            description: _description,
            justerId: _justerId,
            isValidated: false
        });

        // add Minner to s_minners mapping
        s_cases[msg.sender] = newCase;

        caseToJuster[nextCaseId] = caseToJuster[_justerId];

        // event: CaseCreated
        emit CaseCreated(nextCaseId, msg.sender);

        // increment the next ID
        nextCaseId += 1;
    }

    function getJusterByCaseId(uint _caseId) public view returns (address) {
        return caseToJuster[_caseId];
    }
}
