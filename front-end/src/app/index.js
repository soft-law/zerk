"use client";
import Head from "next/head";
import Heeader from "../../components/Landing/Cabeza";
import Portada from "../../components/Landing/Portada";
import Nosotros from "../../components/Landing/DIdentity";
import UseCases from "../../components/Landing/UseCases";
import Team from "../../components/Landing/team";
import Contacto from "../../components/Landing/Contacto";
import Hero from "../../components/comps/hero";

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
        <Hero />
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
