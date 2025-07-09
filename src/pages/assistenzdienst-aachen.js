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
import LeftImageWithText from "./components/Home/LeftImageWithText";

const Home = () => {


    return (
        <>
            <div
                id={``}
                className={`w-full bg-white h-full flex flex-col items-center justify-start`}
            >
                <HomePageWithNavBar image_url="/seila_assistenz13.jpg" headerText="Assistance Service Aachen" />
                <RightVideoWithButton />
                <LeftImageWithText IMAGE_URL={`/Assistenzdienst-Aachen-2-1.jpg`} desc={`Unsere persönliche Assistenz bietet Ihnen Unterstützung bei alltäglichen Aufgaben wie Ankleiden, Körperpflege, Essen und Mobilität. Wir legen großen Wert auf eine vertrauensvolle und respektvolle Beziehung, die es uns ermöglicht, Ihre individuellen Bedürfnisse gezielt zu erfüllen und Ihnen den Alltag zu erleichtern.`} title={`Persönliche Assistenz in Aachen`} desc2={`Unsere 24-Stunden-Betreuung richtet sich an Menschen, die kontinuierliche Unterstützung benötigen. Unser Betreuungspersonal steht Ihnen rund um die Uhr zur Seite und sorgt dafür, dass Sie sich jederzeit sicher und geborgen fühlen. Wir passen die Betreuung individuell an Ihre Lebenssituation an.`} title2={`24h-Betreuung für umfassende Unterstützung`} />
                <RightImageWithText IMAGE_URL={`/Assistenzdienst-Aachen-2-1.jpg`} desc={`Unsere persönliche Assistenz bietet Ihnen Unterstützung bei alltäglichen Aufgaben wie Ankleiden, Körperpflege, Essen und Mobilität. Wir legen großen Wert auf eine vertrauensvolle und respektvolle Beziehung, die es uns ermöglicht, Ihre individuellen Bedürfnisse gezielt zu erfüllen und Ihnen den Alltag zu erleichtern.`} title={`Persönliche Assistenz in Aachen`} desc2={`Unsere 24-Stunden-Betreuung richtet sich an Menschen, die kontinuierliche Unterstützung benötigen. Unser Betreuungspersonal steht Ihnen rund um die Uhr zur Seite und sorgt dafür, dass Sie sich jederzeit sicher und geborgen fühlen. Wir passen die Betreuung individuell an Ihre Lebenssituation an.`} title2={`24h-Betreuung für umfassende Unterstützung`} />
                
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