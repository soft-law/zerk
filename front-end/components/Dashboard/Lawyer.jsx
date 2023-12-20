import { Image, Flex, Heading, Text, Box, Button } from "@chakra-ui/react";
import CreateLawyer from "../comps/createLawyer";
import ValidateCase from "../comps/validateCase";

export default function Investor() {
  return (
    <Box align={"center"}>
      <Heading>Are you a Lawyer?</Heading>
      <Flex direction={"column"}>
        <Heading>Assets</Heading>
        <Text>Upload you Asset & Ask for a Legal Verification</Text>
        <Text>Requirements:</Text>
        <Text>Lawyer Degree</Text>
        <Text>Web 3 Enthusiast</Text>
      </Flex>
      <CreateLawyer />
      <ValidateCase />
    </Box>
  );
}
