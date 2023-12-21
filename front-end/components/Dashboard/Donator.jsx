import { Flex, Heading, Text, Box } from "@chakra-ui/react";
import DonateToCase from "../comps/donate";

export default function LegalVerificator() {
  return (
    <Box align={"center"} p="2rem">
      <Heading mt="10rem">Donate Your $RTM</Heading>
      <Heading>Be a Justice Donator</Heading>
      <Flex justify="center" mt="2rem">
        <DonateToCase />
      </Flex>
    </Box>
  );
}
