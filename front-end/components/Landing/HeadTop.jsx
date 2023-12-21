"use client";
// Header.jsx

import { Flex, Button, Heading } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { usePolkadotJSContext } from "../../context/PolkadotJS";
import { useEVMWalletContext } from "../../context/EVMWallet";

const Header = () => {
  const router = useRouter();
  const { connectTanssi } = usePolkadotJSContext();
  // const { ConnectEVMWallet } = useEVMWalletContext();

  const handleConnection = () => {
    // ConnectEVMWallet();
    router.push("/Dashboard");
  };

  return (
    <Flex
      bgColor="Black"
      color="#05D5FB"
      justify="space-between"
      align="center"
      h="10vh"
      p={4}
    >
      <Heading>Zerk</Heading>
      <Button bgColor="transparent" color="#808080" onClick={handleConnection}>
        Login
      </Button>
      <Button bgColor="transparent" color="#808080" onClick={connectTanssi}>
        Pallet Call
      </Button>
    </Flex>
  );
};

export default Header;
