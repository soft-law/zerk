import { Flex, Heading, Text, Box, Image, Button } from "@chakra-ui/react";
import { usePolkadotJSContext } from "../../context/PolkadotJS";

export default function DID() {
  const { handleConnect, callPallet, connectTanssi } = usePolkadotJSContext();
  return (
    <Box align={"center"}>
      <Heading>BE A LEGAL VALIDATOR</Heading>
      <Flex direction={"column"}>
        <Text>Requirements:</Text>
        <Text>Lawyer Degree</Text>
        <Text>Web 3 Enthusiast</Text>
      </Flex>
      <Flex>
        <Image w="10rem" src={"contracts.svg"} />
        <Box>
          <Text>Hola</Text>
          <Button onClick={connectTanssi}> I want to be a validator</Button>
        </Box>
      </Flex>
    </Box>
  );
}
