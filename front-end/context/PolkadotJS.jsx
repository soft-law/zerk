"use client";

import { createContext, useContext, useState } from "react";

import { ApiPromise, WsProvider } from "@polkadot/api";

const PolkadotJSContext = createContext({});

export const PolkadotJSContextProvider = ({ children }) => {
  const [user, setUser] = useState("");

  const wsProvider = new WsProvider("wss://rpc.polkadot.io");

  const PolkaWalletConnect = async () => {
    console.log("Jalando el context");
    const api = await ApiPromise.create({ provider: wsProvider });
    console.log(api.genesisHash.toHex());
    setUser("Hola");
  };

  return (
    <PolkadotJSContext.Provider value={{ PolkaWalletConnect }}>
      {children}
    </PolkadotJSContext.Provider>
  );
};

export const usePolkadotJSContext = () => useContext(PolkadotJSContext);
