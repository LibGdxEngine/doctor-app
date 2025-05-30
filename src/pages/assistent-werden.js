import HomePageWithNavBar from "@/pages/components/Home/HomePage";
import HomeFAQs from "@/pages/components/Home/HomeFAQs";
import Footer from "@/pages/components/Footer";
import VideoPlayer from "@/pages/components/utils/VideoPlayer";
import { useTranslation } from 'react-i18next';
import LeftImageWithTextAndButton from "./components/Home/LeftImageWithTextAndButton";
import LeftImageWithText from "./components/Home/LeftImageWithText";
import Third from "./components/Home/Third";
import JobRecruitment from "./components/Home/JobRecruitment";
import RightmageWithTextAndButton from "./components/Home/RightImageWithTextAndButton";
import Fifth from "./components/Home/Fifth";
import Sixth from "./components/Home/Sixth";
import Eighth from "./components/Home/Eighth";
import Ningth from "./components/Home/Ningth";
import Tenth from "./components/Home/Tenth";
import FAQItem from "./components/comps/FAQItem";
import RightImageWithButton from "./components/Home/RightImageWithButton";
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
                <HomePageWithNavBar image_url="/mono.jpg" headerText="Assistent werden" />
                <RightImageWithButton title={`Ein Beruf mit Bedeutung und Wertschätzung`} desc={`Wertschätzung, Bedeutung und Anerkennung gehören zu unseren wichtigsten Werten. Diese spiegeln sich in der Zusammenarbeit mit unseren Assistent*innen wider. Wir bieten umfassende Schulungen, faire und flexible Arbeitszeiten sowie eine attraktive Bezahlung inklusive Zeitzuschlägen. infinity-plus machen wir die Assistenz zu einem Beruf, der dich finanziell absichert und dir gleichzeitig Sinn und Erfüllung bietet.`} IMAGE_URL={`/Seila-Assistenz25.jpg`} />
                <LeftImageWithText
                    title={`Einsatz für das selbstbestimmte Leben unserer Assistenznehmer*innen`}
                    desc={`Das selbstbestimmte Leben unserer Assistenznehmer*innen ist unser Ziel – als Assistenzkraft machst du es möglich. Du vervollständigst unser Team, indem du den Assistenznehmer*innen vor Ort hilfst und sie nach ihren individuellen Wünschen und Bedürfnissen unterstützt. Unsere Assistenznehmer*innen, das Innendienst-Team und unsere Assistenzkräfte arbeiten Hand in Hand. In diesem Assistenzdreieck spielt jede Rolle eine wichtige und wertvolle Funktion.`}
                    title2={`Wir hören genau zu`}
                    desc2={`Feedback- und Mitarbeiter*innengespräche sind bei uns regelmäßig auf der Tagesordnung. Jede*r Assistent*in hat eine feste Ansprechperson in der Teamkoordination, die flexibel auf ihre Wünsche eingeht und bei Fragen und Problemen stets erreichbar ist. Die regelmäßigen Dienstbesprechungen und Teamevents stärken den Zusammenhalt und sorgen dafür, dass sich alle wohlfühlen und geschätzt fühlen.`}
                    IMAGE_URL={`/img1.jpg`}
                />
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