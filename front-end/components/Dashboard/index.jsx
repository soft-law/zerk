import { useRouter } from "next/router";
import { usePolkadotJSContext } from "../../context/PolkadotJS";
import Simple from "../comps/nav";
import Footer from "../comps/Contact";
import HeadDash from "../comps/HeadDash.jsx";
import Funding from "./Funding";
import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Image,
  Flex,
} from "@chakra-ui/react";
import Verificators from "./Juster";
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
            <Tab sx={styleTabList}>Descentralized Identity</Tab>
            <Tab sx={styleTabList}>Get Funded!</Tab>
          </Flex>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Verificators />
          </TabPanel>
          <TabPanel>
            <Funding />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
}
