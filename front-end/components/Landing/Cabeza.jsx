"use client";
import { Flex, Image, Button, Heading } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
const ethers = require("ethers");
import { useEffect, useState } from "react";

export default function Heeader() {
  const router = useRouter();
  //Wallet Address state
  const [wallet, setWallet] = useState("");
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
      setWallet(signer.address);
      router.push("/dapp");
      console.log(signer);
    }
  };

  return (
    <Flex
      // bgColor={"black"}
      color="#05D5FB"
      justify="space-between"
      align={"center"}
      h="10vh"
    >
      <Heading>Zerk</Heading>
      <Button bgColor={"#05D5FB"} color="#000575" onClick={MetaLog}>
        Login
      </Button>
      <h3>Wallet Address: {wallet} </h3>
    </Flex>
  );
}
