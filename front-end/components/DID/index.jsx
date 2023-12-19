import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Image,
  Flex,
  Heading,
  Text,
  Box,
  Button,
} from "@chakra-ui/react";
import HeadDash from "../comps/HeadDash";
import LegalVerificator from "./ValidateCases";
import { useEVMWalletContext } from "../../context/EVMWallet";
export default function Dashboard() {
  const styleTabList = {
    mt: "7rem",
    mb: "7rem",
    ml: "1rem",
    mr: "1rem",
    fontSize: "xl",
  };

  const { ConnectEVMWallet } = useEVMWalletContext();

  const handleConnectWallet = () => {
    ConnectEVMWallet();
  };

  return (
    <>
      {/* <Simple /> */}
      <Tabs isManual variant="none" orientation="vertical" isFitted>
        <TabList>
          <Flex bgColor="Black" direction="column">
            <HeadDash sx={styleTabList} />
            <Tab sx={styleTabList}>Descentralized Identity</Tab>
            <Tab sx={styleTabList}>Validate Funding Cases</Tab>
          </Flex>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Box align={"center"}>
              <Heading>Are you a Lawyer?</Heading>
              <Flex direction={"column"}>
                <Text>Requirements:</Text>
                <Text>Lawyer Degree</Text>
                <Text>Web 3 Enthusiast</Text>
              </Flex>
              <Flex>
                <Image w="10rem" src={"contracts.svg"} />
                <Box>
                  <Text>Hola</Text>
                  <Button onClick={handleConnectWallet}>
                    {" "}
                    I want to be a Legal Validator
                  </Button>
                </Box>
              </Flex>
            </Box>
          </TabPanel>
          <TabPanel>
            <LegalVerificator />
          </TabPanel>
        </TabPanels>
      </Tabs>

      {/* <Footer /> */}
    </>
  );
}
