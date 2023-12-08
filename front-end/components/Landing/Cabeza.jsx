"use client";
import { Flex, Image, Button, Heading } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { usePolkadotJSContext } from "../../context/PolkadotJS";

export default function Heeader() {
  const { PolkaWalletConnect } = usePolkadotJSContext();
  const router = useRouter();
  //Wallet Address state

  return (
    <Flex
      // bgColor={"black"}
      color="#05D5FB"
      justify="space-between"
      align={"center"}
      h="10vh"
    >
      <Heading>Zerk</Heading>
      <Button bgColor={"#05D5FB"} color="#000575" onClick={PolkaWalletConnect}>
        Login
      </Button>
      <h3>Wallet Address: {"0x"} </h3>
    </Flex>
  );
}
