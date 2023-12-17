import { useRouter } from "next/router";
import { usePolkadotJSContext } from "../../context/PolkadotJS";
import Simple from "../comps/nav";
import Footer from "../comps/Contact";
import HeadDash from "./HeadDash.jsx";
import Assets from "./Assets";
import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Image,
  Flex,
} from "@chakra-ui/react";
import Verificators from "./Verificator";
export default function Dashboard() {
  const styleTabList = {
    mt: "7rem",
    mb: "7rem",
    ml: "1rem",
    mr: "1rem",
    fontSize: "xl",
  };

  return (
    <>
      {/* <Simple /> */}
      <Tabs isManual variant="none" orientation="vertical" isFitted>
        <TabList>
          <Flex bgColor="Black" direction="column">
            <HeadDash sx={styleTabList} />
            <Tab sx={styleTabList}>Invest & Earn</Tab>
            <Tab sx={styleTabList}>Help the enviroment</Tab>
            <Tab sx={styleTabList}>Swap</Tab>
          </Flex>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Assets />
          </TabPanel>
          <TabPanel>
            <Verificators />
          </TabPanel>
        </TabPanels>
      </Tabs>

      {/* <Footer /> */}
    </>
  );
}
