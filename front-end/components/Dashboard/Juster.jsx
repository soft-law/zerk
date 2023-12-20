import CreateCase from "../comps/createCase";
import CreateJuster from "../comps/createJuster";
import { Image, Flex, Heading, Text, Box, Button } from "@chakra-ui/react";

export default function Juster() {
  return (
    <Box align={"center"}>
      <Heading>
        Get Funded! <br /> & Take Legal Action
      </Heading>
      <Flex direction={"column"}></Flex>
      <CreateJuster />
      <CreateCase />
    </Box>
  );
}
