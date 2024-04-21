import {Cairo} from "next/font/google";
import HomePage from "@/pages/components/Home/HomePage";
import Image from "next/image";
import actionButton from "../../public/Button Primary Color.svg";
import app1 from "../../public/Group 21.svg";
import app2 from "../../public/Group 20.svg";
import follow from "../../public/follow.svg";
import HomeFAQs from "@/pages/components/Home/HomeFAQs";
import Footer from "@/pages/components/Footer";
import SignInPage from "@/pages/components/Auth/SignInPage";
import SignupPage from "@/pages/components/Auth/SignupPage";

const inter = Cairo({subsets: ["latin"]});



export default function Home() {
    return (
        <main
            className={`w-full h-full p-0 m-0 flex min-h-screen flex-col items-center justify-between  ${inter.className}`}
        >
            <div id={`main-container`} className={`w-full h-full flex flex-col items-center justify-start`}>
                <SignupPage />
            </div>
        </main>
    );
}
