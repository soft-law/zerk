import { ChakraProvider } from "@chakra-ui/react";
import { PolkadotJSContextProvider } from "../../context/PolkadotJS";
import "../globals.css";
import { EVMWalletContexttProvider } from "../../context/EVMWallet";

export default function App({ Component, pageProps }) {
  return (
    <>
      <PolkadotJSContextProvider>
        <EVMWalletContexttProvider>
          <ChakraProvider>
            <Component {...pageProps} />
          </ChakraProvider>
        </EVMWalletContexttProvider>
      </PolkadotJSContextProvider>
    </>
  );
}
