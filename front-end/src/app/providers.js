// app/providers.tsx
"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { UserContextProvider } from "../../context/User";

export function Providers({ children }) {
  return (
    <ChakraProvider>
      <UserContextProvider>{children}</UserContextProvider>
    </ChakraProvider>
  );
}
