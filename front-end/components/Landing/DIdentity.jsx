"use client";

import { Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

export default function DIdentity() {
  const router = useRouter();

  const handleMetaLog = () => {
    router.push("/DID");
  };
  return (
    <Flex
      direction={"column"}
      align={"center"}
      borderTop={"1px"}
      borderStyle={"dotted"}
    >
      <Heading m="3rem">BE A LEGAL VALIDATOR</Heading>
      <Flex>
        <Image src="mainImage.jpg" rounded={"10%"} w="50%" m="1.5rem" />
        <Flex direction="column" m="1.5rem">
          <Text fontSize={"1.5rem"}>Descentralized Identity</Text>
          <Text mt="1rem">
            The first step to be a validator is to create a descentralized
            identity.
          </Text>
          <Text mt="1rem">
            After one of our certificators attestate your DID, you will be able
            tu validate Real World Assets.
          </Text>
          <Button bgColor={"#05D5FB"} color="#000575" onClick={handleMetaLog}>
            Create DID
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
