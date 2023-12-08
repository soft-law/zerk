import { ChakraProvider } from "@chakra-ui/react";
import { UserContextProvider } from "../../context/User";
// import "global.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <UserContextProvider>
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
      </UserContextProvider>
    </>
  );
}
