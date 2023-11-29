import { ChakraProvider } from "@chakra-ui/react";
import Head from 'next/head'
import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Icon,
  useColorModeValue,
  createIcon,
  Image
} from '@chakra-ui/react'
import Simple from "./nav";
import Footer from "./footer";
import Hero from "./hero";

export default function Home() {

  
  return (
    <>
      <header>
        <title>ZERK</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/frontend/public/vercel.svg" />
      </header>
      <main>
      <>
      <Simple />
      <Hero />
      <Footer />
    </>
      </main>
    </>
  );
}
