"use client";

import { createContext, useContext } from "react";
import { ethers } from "ethers";
import { MumbaiContract, RotamContract } from "../requireEnviromentVariables";
const contractABIMumbai = require("../utils//contractABIMumbai.json");

const EVMWalletContext = createContext({});

export const EVMWalletContexttProvider = ({ children }) => {
  const createJuster = async () => {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        MumbaiContract,
        contractABIMumbai,
        signer
      );
      const transaction = await contract.createJuster(12345, "Mario", "Mexico");
      console.log("transaction", transaction);
      const receipt = await transaction.wait();
      const transactionHash = receipt.transactionHash;
      console.log(transactionHash);
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  };
  const createCase = async () => {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        MumbaiContract,
        contractABIMumbai,
        signer
      );
      const transaction = await contract.createCase(
        12345,
        "Mexico",
        1,
        "Criminal Case"
      );
      console.log("transaction", transaction);
      const receipt = await transaction.wait();
      const transactionHash = receipt.transactionHash;
      console.log(transactionHash);
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  };

  const createLawyer = async () => {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        MumbaiContract,
        contractABIMumbai,
        signer
      );
      const transaction = await contract.createLawyer(
        12345,
        "Mario",
        "Meico",
        "Criminal"
      );
      console.log("transaction", transaction);
      const receipt = await transaction.wait();
      const transactionHash = receipt.transactionHash;
      console.log(transactionHash);
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  };
  const ConnectEVMWallet = async () => {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        MumbaiContract,
        contractABIMumbai,
        signer
      );
      const transaction = await contract.createLawyer(
        12345,
        "Mario",
        "Meico",
        "Criminal"
      );
      console.log("transaction", transaction);
      const receipt = await transaction.wait();
      const transactionHash = receipt.transactionHash;
      console.log(transactionHash);
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  };

  return (
    <EVMWalletContext.Provider
      value={{ createLawyer, createCase, createJuster }}
    >
      {children}
    </EVMWalletContext.Provider>
  );
};

export const useEVMWalletContext = () => useContext(EVMWalletContext);
