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

const Home = () => {


  return (
    <>
      <div
        id={``}
        className={`w-full bg-white h-full flex flex-col items-center justify-start`}
      >
        <HomePageWithNavBar image_url="/backend.png" headerText="Achievers" />
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
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Tenth />
        <Footer />

      </div>
    </>
  );
}

export default Home;