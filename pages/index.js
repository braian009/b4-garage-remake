import Head from "next/head";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Release from "@/components/Release";
import Contact from "@/components/Contact";
import Expertise from "@/components/Expertise";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | B4 Garage</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Welcome to Your B4 garage! We specialize in custom car modifications, repairs, and maintenance services"
        />
        <meta
          name="keywords"
          content="garage, car modifications, car performance, custom cars, automotive repairs, car maintenance"
        />
        <meta name="author" content="Braian Yanquin" />

        <meta
          property="og:title"
          content="B4 Garage - Car Modifications and Repairs"
        />
        <meta
          property="og:description"
          content="Welcome to Your Garage! We specialize in custom car modifications, repairs, and maintenance services. Visit us for top-notch automotive solutions."
        />
      </Head>
      <>
        <Hero />
        <Services />
        <Release />
        <Expertise />
        <Contact />
      </>
    </>
  );
}
