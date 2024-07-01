import HomePage from "@/pages/components/Home/HomePage";
import HomeFAQs from "@/pages/components/Home/HomeFAQs";
import Footer from "@/pages/components/Footer";
import {useAuth} from "@/context/AuthContext";
import {useRouter} from "next/router";
import {useEffect} from "react";
import SplashScreen from "@/pages/components/SplashScreen";
import FlowingIcons from "@/pages/components/utils/FlowingIcons";

const Home = () => {

    return <>
        <div id={`main-container`} className={`w-full bg-light h-full flex flex-col items-center justify-start`}>

            <HomePage/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <div id="home-video" className="w-full bg-light h-full flex justify-center">
                <iframe
                    width="1200"
                    height="630"
                    src="https://www.youtube.com/embed/CjcRacjsmYY"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
            <br/>
            <br/>
            <br/>
            <div className={`block lg:hidden bg-white w-full h-full z-20 py-10`}>
                <HomeFAQs/>
            </div>
            <Footer/>
        </div>
    </>
}

export default Home;