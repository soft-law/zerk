import CreateLawyer from "../comps/createLawyer";
import { Flex, Heading, Text, Box } from "@chakra-ui/react";
import DonateToCase from "../comps/donate";
import ValidateLawyer from "../comps/validateLawyer";

export default function LegalVerificator() {
  return (
    <Box align={"center"}>
      <Heading>Donate Your $RTM</Heading>
      <Heading>Be a Justice Donator</Heading>
      <DonateToCase />
      <ValidateLawyer />
    </Box>
  );
}
