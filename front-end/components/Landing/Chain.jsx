"use client";

import { Heading, Box, Text, Link } from "@chakra-ui/react";

export default function Chain() {
  return (
    <Box>
      <Heading>Unleash the power of a Legal BlockChain</Heading>
      <Text>
        Welcome to ZERK NETWORK, an EVM Blockchain that provides legal
        validation to Real World Assets.
      </Text>
      <Text>Deploy your Smart-Legal-Contract in our Chain</Text>

      <Link
        href="https://tanssi-evmexplorer.netlify.app/?rpcUrl=https%3A%2F%2Ffraa-dancebox-3020-rpc.a.dancebox.tanssi.network"
        isExternal
      >
        Explorer
      </Link>
      <Text>RPC: wss://fraa-dancebox-3020-rpc.a.dancebox.tanssi.network</Text>
    </Box>
  );
}
