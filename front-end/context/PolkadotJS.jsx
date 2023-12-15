"use client";

import { createContext, useContext, useState } from "react";
import { WALLET } from "../requireEnviromentVariables";
import { ApiPromise, WsProvider, Keyring } from "@polkadot/api";

const PolkadotJSContext = createContext({});

export const PolkadotJSContextProvider = ({ children }) => {
  const [api, setApi] = useState("");

  const wsProvider = new WsProvider(
    "wss://fraa-dancebox-3020-rpc.a.dancebox.tanssi.network"
  );

  //Polkadot API
  const ApiConnect = async () => {
    const api = await ApiPromise.create({ provider: wsProvider });
    console.log(api.genesisHash.toHex());
    return api;
  };

  //Polkadot JS Wallet Connect
  const [accounts, setAccounts] = useState({
    data: undefined,
    loading: false,
    error: null,
  });

  const handleConnect = async () => {
    setAccounts({ data: undefined, loading: true, error: null });

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

      setAccounts({
        data: {
          accounts,
          defaultAccount: accounts[0],
        },
        loading: false,
        error: null,
      });
    } catch (error) {
      console.error("Error with connect", error);
      setAccounts({ data: undefined, loading: false, error });
    }
  };

  //Pallet call functions

  const connectTanssi = async () => {
    //Tanssi API Call
    ApiConnect().then(async (api) => {
      console.log("our client is connected?:", api.isConnected);
      // Create a keyring instance
      const keyring = new Keyring({ type: "sr25519" });
      console.log(keyring);
      const newPair = keyring.addFromUri(WALLET);
      console.log(newPair);
      console.log(
        api.query.system.account("0xa828Ac9305e2274Bb77222Ff34a6E8d13232506A")
      );
      // Define wallet address
      const addr = "0xa828Ac9305e2274Bb77222Ff34a6E8d13232506A";

      // Retrieve the last timestamp
      const now = await api.query.timestamp.now();

      // Retrieve the account balance & current nonce via the system module
      const { nonce, data: balance } = await api.query.system.account(addr);

      console.log(
        `${now}: balance of ${balance.free} and a current nonce of ${nonce}`
      );

      // Retrieve the chain name
      const chain = await api.rpc.system.chain();

      // Retrieve the latest header
      const lastHeader = await api.rpc.chain.getHeader();

      // Log the information
      console.log(
        `${chain}: last block #${lastHeader.number} has hash ${lastHeader.hash}`
      );

      console.log(api.tx.identity.addRegistrar(addr));
    });
  };

  // Create a keyring instance
  const callPallet = () => {
    //Call API
    ApiConnect();
    // Create a keyring instance
    const keyring = new Keyring({ type: "sr25519" });
    console.log(keyring);

    // Some mnemonic phrase
    const PHRASE =
      "entire material egg meadow latin bargain dutch coral blood melt acoustic thought";

    // Add an account, straight mnemonic
    const newPair = keyring.addFromUri(PHRASE);
    console.log(newPair);

    // (Advanced) add an account with a derivation path (hard & soft)
    const newDeri = keyring.addFromUri(`${PHRASE}//hard-derived/soft-derived`);
    console.log(newDeri);

    // (Advanced, development-only) add with an implied dev seed and hard derivation
    const alice = keyring.addFromUri("//Alice", { name: "Alice default" });
    console.log(alice);
  };

  return (
    <PolkadotJSContext.Provider
      value={{
        ApiConnect,
        handleConnect,
        accounts,
        callPallet,
        api,
        connectTanssi,
      }}
    >
      {children}
    </PolkadotJSContext.Provider>
  );
};

export const usePolkadotJSContext = () => useContext(PolkadotJSContext);
