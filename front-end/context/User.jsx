"use client";

import { createContext, useContext, useState } from "react";
const ethers = require("ethers");

const UserContext = createContext({});

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState("");

  //Metamask Login
  const MetaLog = async () => {
    let signer = null;
    let provider;
    if (window.ethereum == null) {
      // If MetaMask is not installed, we use the default provider,
      // which is backed by a variety of third-party services (such
      // as INFURA). They do not have private keys installed so are
      // only have read-only access
      console.log("MetaMask not installed; using read-only defaults");
      provider = ethers.getDefaultProvider();
    } else {
      // Connect to the MetaMask EIP-1193 object. This is a standard
      // protocol that allows Ethers access to make all read-only
      // requests through MetaMask.
      provider = new ethers.BrowserProvider(window.ethereum);

      // It also provides an opportunity to request access to write
      // operations, which will be performed by the private key
      // that MetaMask manages for the user.
      signer = await provider.getSigner();
      setUser(signer);
    }
  };
  return (
    <UserContext.Provider value={{ user, MetaLog }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
