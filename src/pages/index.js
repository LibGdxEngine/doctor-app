import HomePage from "@/pages/components/Home/HomePage";
import HomeFAQs from "@/pages/components/Home/HomeFAQs";
import Footer from "@/pages/components/Footer";
import VideoPlayer from "@/pages/components/utils/VideoPlayer";

const Home = () => {

    return <>
        <div id={`main-container`} className={`w-full bg-light h-full flex flex-col items-center justify-start`}>

            <HomePage/>
            <br/>
            <br/>
            <div className={`sm:hidden`}>

                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
            </div>
            <div className={`w-full h-full block sm:hidden`}>
                <VideoPlayer/>
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