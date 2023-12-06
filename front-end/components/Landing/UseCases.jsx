"use client";

import { Box, Heading, Image, Flex, Text, Spacer } from "@chakra-ui/react";

export default function UseCases() {
  const styleContratos = {
    boxSize: "7.5rem",
    m: "4rem",
  };

  return (
    <Box textAlign="center">
      <Heading>USE CASES</Heading>
      <Flex w="100%" align="center">
        <Box sx={styleContratos}>
          <Image src={"vehicles.svg"} />
          <Text>Vehicles.</Text>
        </Box>
        <Box sx={styleContratos}>
          <Image src={"realState.svg"} />
          <Text>Real State.</Text>
        </Box>
        <Box sx={styleContratos}>
          <Image src={"Pacto_Socios.svg"} />
          <Text>Commodities.</Text>
        </Box>
        <Box sx={styleContratos}>
          <Image src={"jelwery.svg"} />
          <Text>Jelwery.</Text>
        </Box>
      </Flex>
      <Flex>
        <Spacer />
        <Box sx={styleContratos}>
          <Image src={"art.svg"} />
          <Text>Fine Art.</Text>
        </Box>
        <Box sx={styleContratos}>
          <Image src={"loans.svg"} />
          <Text>Loans.</Text>
        </Box>
        <Box sx={styleContratos}>
          <Image src={"contracts.svg"} />
          <Text>Contracts.</Text>
        </Box>
        <Spacer />
      </Flex>
    </Box>
  );
}
