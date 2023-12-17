"use client";

import { Flex, Heading, Box, Text, Image } from "@chakra-ui/react";
export default function Team() {
  const profileImage = {
    objectFit: "contain",
    boxSize: "150px",
    m: "5",
    borderRadius: "full",
  };

  return (
    <Flex h="50vh" direction="column" justify={"center"} align="center">
      <Heading>Team</Heading>
      <Flex>
        <Box align="center" m="5">
          <Image
            src={"wolf.jpg"}
            sx={profileImage}
            alt="Wolfhack profile pic"
          />
          <Text fontSize="1.5rem">Wolfhack</Text>
          <Text>Legal Wizzard & Web3 Coder</Text>
        </Box>
        <Box align="center" m="5">
          <Image
            src={"wolf.jpg"}
            sx={profileImage}
            alt="Wolfhack profile pic"
          />
          <Text fontSize="1.5rem">Terratek</Text>
          <Text>Digital Artist</Text>
        </Box>
        <Box align="center" m="5">
          <Image
            src={"wolf.jpg"}
            sx={profileImage}
            alt="Wolfhack profile pic"
          />
          <Text fontSize="1.5rem">Wolfhack</Text>
          <Text>Front-End & Smart-Contract Develloper</Text>
        </Box>
        <Box align="center" m="5">
          <Image
            src={"wolf.jpg"}
            sx={profileImage}
            alt="Wolfhack profile pic"
          />
          <Text fontSize="1.5rem">Wolfhack</Text>
          <Text>Front-End & Smart-Contract Develloper</Text>
        </Box>
      </Flex>
    </Flex>
  );
}
