import { ChakraProvider } from "@chakra-ui/react";
import { PolkadotJSContextProvider } from "../../context/PolkadotJS";
import "./globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <PolkadotJSContextProvider>
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
      </PolkadotJSContextProvider>
    </>
  );
}
