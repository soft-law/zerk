import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Flex,
  Image,
} from "@chakra-ui/react";
import HeadDash from "../comps/HeadDash";
import LegalVerificator from "./Lawyer";
import Juster from "./Juster";
import Donator from "./Donator";
import Admin from "./Admin";
import { color } from "framer-motion";
export default function Dashboard() {
  const styleTabList = {
    mt: "1rem",
    mb: "1rem",
    ml: "1rem",
    mr: "1rem",
    fontSize: "xl",
    color: "gray",
    _hover: { color: "#adff00" },
  };

  return (
    <>
      <Tabs
        isManual
        variant="lazy"
        orientation="vertical"
        isFitted
        bgImage="section2.svg"
        bgSize="cover"
        bgRepeat="no-repeat"
      >
        <TabList h="100vh">
          <Flex bgColor="Black" direction="column" h="100vh" justify="left">
            <HeadDash sx={styleTabList} />
            <Tab sx={styleTabList}>
              <Image src="justerGrey.svg" />
              Justers
            </Tab>

            <Tab sx={styleTabList}>
              <Image src="gravelGrey.svg" />
              Lawyers
            </Tab>
            <Tab sx={styleTabList}>
              <Image src="donatorGrey.svg" />
              Donators
            </Tab>
            <Tab sx={styleTabList}>
              <Image src="adminGrey.svg" />
              Admin
            </Tab>
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
          <TabPanel>
            <Admin />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
}
