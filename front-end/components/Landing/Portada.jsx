"use client";

import {
  Flex,
  Heading,
  Text,
  Image,
  Button,
  Box,
  Input,
} from "@chakra-ui/react";

export default function Portada() {
  const mainImage = {
    // filter: 'blur(8px)',
    objectFit: "contain",
    boxSize: "150px",
    m: "10",
  };

  return (
    <Flex align="center" borderTop={"1px"}>
      <Flex direction={"column"} w="60%" p="5" pl="10" align="center">
        <Heading>Zerk</Heading>
        <Text fontSize={"1.5rem"}>Real World Legal Asset Pallet</Text>
        <Image src="zerkIcon.svg" sx={mainImage} />
        <Button bgColor={"rgba(0,0,0,0)"} color="#05D5FB" w="45%" border="1px">
          Implement Pallet!
        </Button>
      </Flex>
    </Flex>
  );
}
