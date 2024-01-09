import React, { useState } from "react";
import { useToast, Spinner } from "@chakra-ui/react";
import {
  ModalBody,
  ModalFooter,
  Button,
  Flex,
  Text,
  Heading,
  Stack,
  FormControl,
  FormLabel,
  Image,
  useDisclosure,
  ModalContent,
  Modal,
  Input,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";

import { ethers } from "ethers";
import { RotamContract } from "../../requireEnviromentVariables";
const contractABIrotam = require("../../utils/contractABIrotam.json");

export default function CreateJuster() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [licenseNumber, setLicenseNumber] = useState("");
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const toast = useToast();

  const createJuster = async (licenseNumber, name, location) => {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await window.ethereum.request({ method: "eth_requestAccounts" });
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        RotamContract,
        contractABIrotam,
        signer
      );
      const transaction = await contract.createJuster(
        licenseNumber,
        name,
        location
      );
      console.log("transaction", transaction);
      setLoading(true);
      const receipt = await transaction.wait();
      const transactionHash = receipt.transactionHash;
      console.log(transactionHash);
      toast({
        title: "Create Juster",
        description: "Juster  created successfully",
        status: "success",
        duration: 2000,
        isClosable: true,
        position: "top-right",
      });
      setLoading(false);
      setSuccess(true);
    } catch (error) {
      let errorMessage;
      if (
        error.message &&
        error.message.includes("user rejected transaction")
      ) {
        errorMessage = "User denied the transaction.";
      } else if (
        error.message &&
        error.message.includes("Juster already exists")
      ) {
        errorMessage = " Juster already exists";
      } else {
        errorMessage = `Unexpected error: ${error.message}`;
      }

      toast({
        title: "Create Juster",
        description: `Error: ${errorMessage}`,
        status: "error",
        duration: 2000,
        isClosable: true,
        position: "top-right",
      });

      console.log(`Error: ${error}`);
    }
  };

  const handlecreateJuster = async () => {
    if (licenseNumber && name && location) {
      createJuster(licenseNumber, name, location);
    } else {
      toast({
        title: "Create Juster",
        description: "Please provide all arguments",
        status: "info",
        duration: 2000,
        isClosable: true,
        position: "top-right",
      });
    }
  };
  return (
    <>
      <Button
        bgColor="transparent"
        border="1px"
        borderColor="#ADFF00"
        color="#808080"
        onClick={onOpen}
      >
        Create My Juster DID
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalContent bgColor={"#151515"}>
          <Flex
            alignItems="center"
            flexDir="column"
            bgColor="black"
            borderBottomRadius="3rem"
          >
            <Image
              src="powertothepeopleno_bg_1_1x.webp"
              alt="Juster Image"
              objectFit={"contain"}
              boxSize={"15rem"}
            ></Image>
            <Heading
              fontWeight="medium"
              color="white"
              fontSize="1.2rem"
              mb="1.5rem"
              textAlign="center"
              bgColor="black"
            >
              Be a Juster!
            </Heading>
          </Flex>

          <ModalBody>
            <Heading fontSize="1.2rem" textAlign="center" m="4">
              Wait for the validation of your Identity <br />& Get Funded
            </Heading>
            <Text>Need an Id to validate</Text>

            <form onSubmit={handlecreateJuster}>
              <Flex align={"center"} justify={"center"} direction={"column"}>
                <FormControl p="1rem" pb="0" isRequired>
                  <FormLabel textAlign="center">License Number</FormLabel>
                  <Input
                    placeholder="License Number"
                    value={licenseNumber}
                    onChange={(e) => setLicenseNumber(e.target.value)}
                  />
                </FormControl>
                <FormControl p="1rem" pb="0" isRequired>
                  <FormLabel textAlign="center">Name</FormLabel>
                  <Input
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </FormControl>
                <FormControl p="1rem" pb="0" isRequired>
                  <FormLabel textAlign="center">Location</FormLabel>
                  <Input
                    placeholder="Location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </FormControl>
                <Stack spacing={6} direction={["column", "row"]}></Stack>
              </Flex>
            </form>
          </ModalBody>

          <ModalFooter justify={"space-arround"} flexDir="column">
            {success ? (
              <Alert status="success" variant="solid">
                <AlertIcon />
                Data uploaded to the server. Fire on!
              </Alert>
            ) : (
              <>
                {loading ? (
                  <>
                    <Text>Transaction Loading</Text>
                    <Spinner
                      thickness="4px"
                      speed="0.65s"
                      emptyColor="gray.200"
                      color="#adff00"
                      size="xl"
                    />
                  </>
                ) : (
                  <></>
                )}
                {loading ? (
                  <></>
                ) : (
                  <>
                    <Button
                      bg={"grey"}
                      color={"white"}
                      w="full"
                      _hover={{
                        bg: "black",
                      }}
                      onClick={handlecreateJuster}
                    >
                      Create Juster
                    </Button>
                  </>
                )}
              </>
            )}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
