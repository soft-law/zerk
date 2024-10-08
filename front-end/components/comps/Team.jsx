"use client";

import { Flex, Heading, Box, Text, Image } from "@chakra-ui/react";
export default function Team() {
  const profileImage = {
    objectFit: "cover",
    boxSize: "150px",
    m: "5",
    borderRadius: "full",
  };

  return (
    <Flex
      h="50vh"
      direction="column"
      justify={"center"}
      align="center"
      bgImage="abstract Grey.svg"
    >
      <Heading>Team</Heading>
      <Flex>
        <Box align="center" m="5">
          <Image
            src="https://gateway.pinata.cloud/ipfs/QmWe62Ct1yZsHYcAdRGfPuVoc5coTeqrqVdWxjXyy9LSqz?_gl=1*guf7o3*_ga*MTUzNDI2NjE5My4xNjczNDgxNzM1*_ga_5RMPXG14TE*MTY3ODA1NTg2OC41LjEuMTY3ODA1NTkwNi4yMi4wLjA."
            sx={profileImage}
            alt="Wolfhack profile pic"
          />
          <Text fontSize="1.5rem">Mario Andrade</Text>
          <Text>Legal Wizzard & Web3 Dev.</Text>
        </Box>

        <Box align="center" m="5">
          <Image
            src={
              "ganesh.png"
            }
            sx={profileImage}
            alt="Ganesh profile pic"
          />
          <Text fontSize="1.5rem">Ganesh</Text>
          <Text>Substrate Dev.</Text>
        </Box>
        <Box align="center" m="5">
          <Image
            src={
              "nagra.png"
            }
            sx={profileImage}
            alt="Nagra profile pic"
          />
          <Text fontSize="1.5rem">Nagra Rohit</Text>
          <Text>Solidity Dev.</Text>
        </Box>
        <Box align="center" m="5">
          <Image
            src={
              "nik.png"
            }
            sx={profileImage}
            alt="Ivan profile pic"
          />
          <Text fontSize="1.5rem">Iván Terratek</Text>
          <Text>Digital Artist</Text>
        </Box>
      </Flex>
    </Flex>
  );
}
