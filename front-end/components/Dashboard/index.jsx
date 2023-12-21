import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Flex,
} from "@chakra-ui/react";
import HeadDash from "../comps/HeadDash";
import LegalVerificator from "./Lawyer";
import { useEVMWalletContext } from "../../context/EVMWallet";
import Juster from "./Juster";
import Donator from "./Donator";
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
      <Tabs
        isManual
        variant="none"
        orientation="vertical"
        isFitted
        bgImage="section2.svg"
        bgSize="cover"
        bgRepeat="no-repeat"
      >
        <TabList>
          <Flex bgColor="Black" direction="column">
            <HeadDash sx={styleTabList} />
            <Tab sx={styleTabList}>Justers</Tab>
            <Tab sx={styleTabList}>Lawyers</Tab>
            <Tab sx={styleTabList}>Donators</Tab>
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
            <Donator />
          </TabPanel>
        </TabPanels>
      </Tabs>

      {/* <Footer /> */}
    </>
  );
}
