import HomePage from "@/pages/components/Home/HomePage";
import HomeFAQs from "@/pages/components/Home/HomeFAQs";
import Footer from "@/pages/components/Footer";
import {useAuth} from "@/pages/components/utils/AuthContext";
import {useRouter} from "next/router";
import {useEffect} from "react";
import SplashScreen from "@/pages/components/SplashScreen";

const Home = () => {
    const router = useRouter();
    const {token, loading} = useAuth();

    useEffect(() => {
        if (!loading && !token) {
            router.push('/signin');
        }
    }, [token, loading, router]);

    if (loading) {
        return <SplashScreen/>
    }

    return <>
        <div id={`main-container`} className={`w-full h-full flex flex-col items-center justify-start`}>
            <HomePage/>
            <div className={`block lg:hidden bg-white w-full h-full z-20 py-10`}>
                <HomeFAQs/>
            </div>
            <Footer/>
        </div>
    </>
}

export default Home;