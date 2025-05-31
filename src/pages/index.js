import HomePageWithNavBar from "@/pages/components/Home/HomePage";
import HomeFAQs from "@/pages/components/Home/HomeFAQs";
import Footer from "@/pages/components/Footer";
import VideoPlayer from "@/pages/components/utils/VideoPlayer";
import { useTranslation } from 'react-i18next';
import LeftImageWithTextAndButton from "./components/Home/LeftImageWithTextAndButton";
import Third from "./components/Home/Third";
import JobRecruitment from "./components/Home/JobRecruitment";
import RightmageWithTextAndButton from "./components/Home/RightImageWithTextAndButton";
import Fifth from "./components/Home/Fifth";
import Sixth from "./components/Home/Sixth";
import Eighth from "./components/Home/Eighth";
import Ningth from "./components/Home/Ningth";
import Tenth from "./components/Home/Tenth";
import FAQItem from "./components/comps/FAQItem";
import RightVideoWithButton from "./components/Home/RightVideoWithButton";
import Solid from "./components/Home/Solid";
import ServicesSection from "./components/Home/ServicesSection";
import RightImageWithText from "./components/Home/RightImageWithText";
import React from 'react';
import fs from 'fs'; // For getStaticProps/getServerSideProps
import path from 'path'; // For getStaticProps/getServerSideProps
import Head from 'next/head';

export async function getServerSideProps() {
  let content = { // Default content
    page1: {
      headerText: "Default Title",
      headerTopText: "Default description.",
      headerBottomText: "Default CTA",
      ctaButtonText: "Default Button",
      whatsapp: "Default WhatsApp Number"
    }
  };
  try {
    const dataFilePath = path.resolve(process.cwd(), 'data', 'content.json');
    const fileContents = fs.readFileSync(dataFilePath, 'utf8');
    const jsonData = JSON.parse(fileContents);
    if (jsonData && jsonData.page1) { // Check if homepage data exists
      content = jsonData;
    }
  } catch (error) {
    console.error('Error reading content file for homepage:', error);
    // Log the error but use default content, so the page still renders.
  }

  return {
    props: {
      initialContent: content.page1 // Pass only homepage content
    },
  };
}

<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Infinity-Plus ",
      "url": "https://plus-infinity.de/",
      "description": "Ein Beruf mit Sinn, Anerkennung, fairer Bezahlung und flexiblen Arbeitszeiten.",
      "sameAs": ["https://www.facebook.com/plus-infinity.de", "..."]
    }),
  }}
/>

const Home = ({ initialContent }) => {
  const headerText = initialContent?.headerText || "Welcome!";
  const headerTopText = initialContent?.headerTopText || "Please configure content in the admin panel.";
  const headerBottomText = initialContent?.headerBottomText || "Contact us for more info";
  const ctaButtonText = initialContent?.ctaButtonText || "Explore";
  const whatsapp = initialContent?.whatsapp || "1234567890";


  return (
    <>
      <Head>
        <title>Assistenzberuf mit Bedeutung und Wertschätzung | Infinity-Plus </title>
        <meta name="description" content="Finde bei Infinity-Plus  einen erfüllenden Beruf mit Sinn, Anerkennung, fairer Bezahlung und flexiblen Arbeitszeiten." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://plus-infinity.de/" />

        {/* Open Graph tags */}
        <meta property="og:title" content="Assistenzberuf mit Bedeutung – Infinity-Plus " />
        <meta property="og:description" content="Bei uns findest du Anerkennung, faire Bedingungen und eine erfüllende Tätigkeit im Assistenzbereich." />
        <meta property="og:url" content="https://plus-infinity.de/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://plus-infinity.de/_next/image?url=%2Fnewdesign.png" />
      </Head>
      <div
        id={``}
        className={`w-full bg-white h-full flex flex-col items-center justify-start`}
      >
        <HomePageWithNavBar isBigNav={true}
          headerTopText={headerTopText}
          headerText={`${headerText}`}
          headerBottomText={headerBottomText}
          ctaButtonText={ctaButtonText}
          whatsapp={whatsapp}
        />
        <RightVideoWithButton />
        <LeftImageWithTextAndButton />
        <RightmageWithTextAndButton />
        <Third />


        <Solid />




        {/* <Fifth /> */}

        {/* <Sixth /> */}
        <JobRecruitment />
        <RightImageWithText />
        <ServicesSection />
        {/* <Eighth /> */}
        {/* <Ningth /> */}
        <FAQItem />

        <Tenth />
        <Footer />

      </div>
    </>
  );
}

export default Home;