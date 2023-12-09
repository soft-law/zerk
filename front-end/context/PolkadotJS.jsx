"use client";

import { createContext, useContext, useState } from "react";

import { ApiPromise, WsProvider } from "@polkadot/api";

const PolkadotJSContext = createContext({});

export const PolkadotJSContextProvider = ({ children }) => {
  const [user, setUser] = useState("");

  const wsProvider = new WsProvider("wss://rpc.polkadot.io");

  //Polkadot API
  const PolkaWalletConnect = async () => {
    console.log("Jalando el context");
    const api = await ApiPromise.create({ provider: wsProvider });
    console.log(api.genesisHash.toHex());
    setUser("Hola");
  };

  //Polkadot JS Wallet Connect
  const [state, setState] = useState({
    data: undefined,
    loading: false,
    error: null,
  });

  const handleConnect = async () => {
    setState({ data: undefined, loading: true, error: null });

    try {
      const { web3Accounts, web3Enable } = await import(
        "@polkadot/extension-dapp"
      );

      const injectedExtensions = await web3Enable(
        "polkadot-extension-dapp-example"
      );

      if (!injectedExtensions.length) {
        throw new Error("NO_INJECTED_EXTENSIONS");
      }

      const accounts = await web3Accounts();

      if (!accounts.length) {
        throw new Error("NO_ACCOUNTS");
      }

      setState({
        data: {
          accounts,
          defaultAccount: accounts[0],
        },
        loading: false,
        error: null,
      });
    } catch (error) {
      console.error("Error with connect", error);
      setState({ data: undefined, loading: false, error });
    }
  };

  return (
    <PolkadotJSContext.Provider
      value={{ PolkaWalletConnect, handleConnect, state }}
    >
      {children}
    </PolkadotJSContext.Provider>
  );
};

export const usePolkadotJSContext = () => useContext(PolkadotJSContext);
