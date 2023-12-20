// // SPDX-License-Identifier: MIT
// pragma solidity ^0.8.20;

// //-----Imports-----//
// import "./ZerkLawyerJuster.sol";

// contract ZerkCase is LawyerJusterContract {
//     struct Case {
//         string caseNumber;
//         string caseJurisdiction;
//         uint price;
//         address currentCase;
//         string description;
//         bool isValidated;
//     }

//     address public accessContractAddress;

//     //----- Mappings & Enums -----//
//     mapping(address => Case) public s_cases;

//     //----Events----//
//     event CaseCreated(address indexed caso);

//     //------Constructor ------//
//     constructor(address _accessContractAddress) LawyerJusterContract() {
//         accessContractAddress = _accessContractAddress;
//     }

//     function createCase(
//         string memory _caseNumber,
//         string memory _caseJurisdiction,
//         uint _price,
//         string memory _description
//     ) public onlyJuster {
//         Case memory newCase = Case({
//             caseNumber: _caseNumber,
//             caseJurisdiction: _caseJurisdiction,
//             price: _price,
//             currentCase: msg.sender,
//             description: _description,
//             isValidated: false
//         });

//         // add Minner to s_minners mapping
//         s_cases[msg.sender] = newCase;

//         // event: CaseCreated
//         emit CaseCreated(msg.sender);
//     }
// }
