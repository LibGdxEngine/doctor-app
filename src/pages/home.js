import HomePage from "@/pages/components/Home/HomePage";
import HomeFAQs from "@/pages/components/Home/HomeFAQs";
import Footer from "@/pages/components/Footer";

const Home = ()=>{
    return<>
        <div id={`main-container`} className={`w-full h-full flex flex-col items-center justify-start`}>
            <HomePage/>
            <div className={`block lg:hidden bg-white w-full h-full z-20 py-10`}>
                <HomeFAQs/>
            </div>
            <Footer/>
        </div>
    </>
};

export default Home;