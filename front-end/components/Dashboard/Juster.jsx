import CreateCase from "../comps/createCase";
import CreateJuster from "../comps/createJuster";
import { Image, Flex, Heading, Text, Box, Button } from "@chakra-ui/react";

export default function Juster() {
  return (
    <Box h="100vh" p="2rem" align={"center"}>
      <Flex flexDir="column" alignSelf="center" mt="10rem">
        <Heading>
          Get Funded! <br /> & Take Legal Action
        </Heading>
        <Flex mt="2rem" p="2rem" justify="space-around">
          <CreateJuster />
          <CreateCase />
        </Flex>
      </Flex>
    </Box>
  );
}
