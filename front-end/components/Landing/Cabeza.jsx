"use client";
// Header.jsx

import { Flex, Button, Heading } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { usePolkadotJSContext } from "../../context/PolkadotJS";
// import dynamic from "next/dynamic";

// // Dynamically import useConnect
// const WalletConnect = dynamic(
//   () => import("../../utils/WalletConnect").then((m) => m.default),
//   {
//     ssr: false,
//   }
// );

const Header = () => {
  const router = useRouter();
  const { handleConnect, state } = usePolkadotJSContext();

  const handleConnection = () => {
    handleConnect();
    router.push("/Dashboard");
  };

  return (
    <Flex color="#05D5FB" justify="space-between" align="center" h="10vh" p={4}>
      <Heading>Zerk</Heading>
      <Button bgColor="#05D5FB" color="#000575" onClick={handleConnection}>
        Login
      </Button>
      {/* <h3>Wallet Address: {state} </h3> */}
    </Flex>
  );
};

export default Header;
