import HomePage from "@/pages/components/Home/HomePage";
import HomeFAQs from "@/pages/components/Home/HomeFAQs";
import Footer from "@/pages/components/Footer";
import VideoPlayer from "@/pages/components/utils/VideoPlayer";
import { useTranslation } from 'react-i18next';
import Second from "./components/Home/Second";
import Third from "./components/Home/Third";
import JobRecruitment from "./components/Home/JobRecruitment";
import Fourth from "./components/Home/Fourth";
import Fifth from "./components/Home/Fifth";
import Sixth from "./components/Home/Sixth";
import Eighth from "./components/Home/Eighth";
import Ningth from "./components/Home/Ningth";
import Tenth from "./components/Home/Tenth";
import FAQItem from "./components/comps/FAQItem";
import HeroImageSection from "./components/Home/video";



const Home = () => {


    return (
      <>
        <div
          id={``}
          className={`w-screen bg-white h-full flex flex-col items-center justify-start`}
        >
          <HomePage />
          <HeroImageSection />
          <Second/>
          <Third />
          <Fourth />
          <Fifth />
          <FAQItem />
          {/* <Sixth /> */}
          <JobRecruitment />
          <Eighth />
          <Ningth />
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