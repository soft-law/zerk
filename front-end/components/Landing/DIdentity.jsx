"use client";

import { Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

export default function DIdentity() {
  const router = useRouter();

  const handleMetaLog = () => {
    router.push("/Dashboard");
  };
  return (
    <Flex
      direction={"column"}
      align={"center"}
      borderTop={"1px"}
      borderStyle={"dotted"}
      bgImage="section3.svg"
    >
      <Heading m="3rem">Are you a Lawyer?</Heading>
      <Flex>
        <Image
          src="powertothepeopleno_bg_1_1x.webp"
          rounded={"10%"}
          w="35%"
          m="1.5rem"
        />
        <Flex direction="column" m="1.5rem">
          <Text fontSize={"1.5rem"}>Be a legal validator!</Text>
          <Text color="#808080" mt="1rem">
            We validate every case that seeks funding in our platform.
          </Text>
          <Text color="#808080" mt="1rem">
            Be part of the community & earn $IUS in the process.
          </Text>
          <Button
            mt="1rem"
            bgColor="transparent"
            border="1px"
            borderColor="#ADFF00"
            color="#808080"
            onClick={handleMetaLog}
          >
            I am a Lawyer
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
