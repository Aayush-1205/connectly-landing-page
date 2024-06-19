import Head from "next/head";
import Contact from "./Components/Contact";
import Hero from "./Components/Hero";
import Section1 from "./Components/Section1";
import Section2 from "./Components/Section2";
import Section3 from "./Components/Section3";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <main className="main">
        <Hero />
        <div className="px-5">
          <Section1 />
          <Section2 />
        </div>
        <Section3 />
        <Contact />
      </main>
    </>
  );
}
