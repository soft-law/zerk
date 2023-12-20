import { Image, Flex, Heading, Text, Box, Button } from "@chakra-ui/react";
import CreateLawyer from "../comps/createLawyer";
import ValidateCase from "../comps/validateCase";
import ValidateJuster from "../comps/validateJuster";

export default function Investor() {
  return (
    <Box align={"center"}>
      <Heading>
        Are you a Lawyer? <br /> Validate Cases & Earn Money
      </Heading>

      <CreateLawyer />
      <ValidateCase />
      <ValidateJuster />
    </Box>
  );
}
