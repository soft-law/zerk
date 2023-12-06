"use client";
import Head from "next/head";
import Heeader from "./Cabeza";
import Portada from "./Portada";
import Nosotros from "./DIdentity";
import UseCases from "./UseCases";
import Team from "./team";
import Contacto from "./Contacto";

export default function Landing() {
  return (
    <>
      <Head>
        <title>Zerk</title>
        <meta name="description" content="Real World Legal Asset Pallet" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="..../public/favicon.svg" />
      </Head>

      <header>
        <Heeader />
      </header>
      <main>
        <Portada />
      </main>
      <section>
        <Nosotros />
      </section>
      <section>
        <UseCases />
      </section>
      <section>
        <Team />
      </section>
      <footer>
        <Contacto />
      </footer>
    </>
  );
}
