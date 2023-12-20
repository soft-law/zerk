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
import LegalVerificator from "./Lawyer";
import { useEVMWalletContext } from "../../context/EVMWallet";
import Juster from "./Juster";
import Investor from "./Investor";
export default function Dashboard() {
  const styleTabList = {
    mt: "7rem",
    mb: "7rem",
    ml: "1rem",
    mr: "1rem",
    fontSize: "xl",
  };

  const { createLawyer } = useEVMWalletContext();

  const handleConnectWallet = () => {
    createLawyer();
  };

  return (
    <>
      {/* <Simple /> */}
      <Tabs isManual variant="none" orientation="vertical" isFitted>
        <TabList>
          <Flex bgColor="Black" direction="column">
            <HeadDash sx={styleTabList} />
            <Tab sx={styleTabList}>Justers</Tab>
            <Tab sx={styleTabList}>Lawyers</Tab>
            <Tab sx={styleTabList}>Investors</Tab>
          </Flex>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Juster />
          </TabPanel>
          <TabPanel>
            <LegalVerificator />
          </TabPanel>
          <TabPanel>
            <Investor />
          </TabPanel>
        </TabPanels>
      </Tabs>

      {/* <Footer /> */}
    </>
  );
}
