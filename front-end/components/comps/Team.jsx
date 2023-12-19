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
          <Text>Legal Wizzard & Web3 Dev.</Text>
        </Box>

        <Box align="center" m="5">
          <Image
            src={
              "https://copper-ready-guanaco-464.mypinata.cloud/ipfs/QmehojxFh3g14QhDNzSZ7fAMxnemnLAxy8PbEbNmwqmbzV?_gl=1*14nkjjq*_ga*MTM1ODQ0MTgxMi4xNjk2NzkyMjEz*_ga_5RMPXG14TE*MTcwMjk2MjQwMC40My4xLjE3MDI5NjI0MjguMzIuMC4w"
            }
            sx={profileImage}
            alt="Ganesh profile pic"
          />
          <Text fontSize="1.5rem">Ganesh</Text>
          <Text>Substrate Dev.</Text>
        </Box>
        <Box align="center" m="5">
          <Image src={"wolf.jpg"} sx={profileImage} alt="Nagra profile pic" />
          <Text fontSize="1.5rem">Nagra Rohit</Text>
          <Text>Solidity Dev.</Text>
        </Box>
      </Flex>
    </Flex>
  );
}
