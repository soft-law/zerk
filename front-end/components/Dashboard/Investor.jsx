import CreateLawyer from "../comps/createLawyer";
import { Flex, Heading, Text, Box } from "@chakra-ui/react";

export default function LegalVerificator() {
  return (
    <Box align={"center"}>
      <Heading>Invest Your RTM</Heading>
      <Heading>Validate Funding Cases</Heading>
      <Text>Earn $IUS</Text>
      <Flex direction={"column"}>
        <Text>Requirements:</Text>
        <Text>Lawyer Degree</Text>
        <Text>Web 3 Enthusiast</Text>
      </Flex>
    </Box>
  );
}
