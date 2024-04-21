import Image from "next/image";
import sliderImage from "../../../../public/sliderImage.svg";
import arrowDown from "../../../../public/arrowdown2.svg";
import homeBackground from "../../../../public/home_background.svg";
import actionButton from "../../../../public/Button Primary Color.svg";
import homeImg from "../../../../public/home_img.svg";
import logo from "../../../../public/logo.svg";
import TopBar from "@/pages/components/Home/TopBar";
import SearchBar from "@/pages/components/Home/SearchBar";
import {useState} from "react";
import searchIcon from "../../../../public/searchIcon.svg";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import user from "../../../../public/userplaceholder.jpeg";
import LanguageDropdown from "@/pages/components/utils/LanguageDropdown";
import HomeFAQs from "@/pages/components/Home/HomeFAQs";
import {useRouter} from "next/router";

function SectionsHeader() {
    return <div id={`sections-header`} className={`w-full mt-2 flex items-center justify-center px-4`}>
        <div className={`w-full rounded-8 px-5 py-1 text-navyBlue border border-0.5 border-lightDark mx-1`}>
            Material
        </div>
        <div className={`w-full rounded-8 px-5 py-1 text-navyBlue border border-0.5 border-lightDark mx-1`}>
            Material
        </div>
        <div className={`w-full rounded-8 px-5 py-1 text-navyBlue border border-0.5 border-lightDark mx-1`}>
            Material
        </div>
    </div>;
}

function HomeSlider() {
    return <div id={`home-slider`} className={`w-full h-fit px-4 mt-4`}>
        <Image src={sliderImage} width={750} height={650} alt={``}/>
    </div>;
}


function HomePage() {
    const router = useRouter();
    function handleStart() {
        router.push('/start')
    }

    return <div id={`home-container`} className={`w-full h-full`}>

        <div className="hidden lg:block">
            <TopBar/>
            <SearchBar/>
            <SectionsHeader/>
            <HomeSlider/>
            <HomeFAQs/>
        </div>
        <div  className="block lg:hidden relative">

            <div id={`navbar`} className={` w-full h-20 flex items-center justify-between navbar px-20`}>
                <Image src={logo} alt={``} width={50} height={50}/>
                <div className={`w-fit flex flex-row items-center justify-between`}>
                    <div className={`text-white mx-10`}>Material</div>
                    <div className={`text-white mx-10`}>Discussion</div>
                    <div className={`text-white mx-10`}>Generate Quiz</div>
                </div>

                <div id={`search-bar`} className={`w-[385px] h-[49px] relative px-5 mt-2`}>
                    <input type={"text"}
                           className={`w-full h-full bg-searchColor py-2  border border-customBlue focus:border-lightDark outline-none rounded-full px-2 ps-10`}
                    >
                    </input>
                    <FontAwesomeIcon className={`absolute p-1 left-12 top-[28%] -translate-x-[50%]`} icon={faSearch}
                                     style={{color: '#0073D1'}}/>
                </div>

                <div id={`profile-icon-container`} className={`w-fit flex items-center justify-start `}>
                    <Image width={35} height={35} src={user} alt={`profile`} objectFit={`cover`}
                           className={`w-10 h-10 rounded-full me-2`}/>
                    <div className={`flex flex-col`}>
                        <div className={`text-xs text-white`}>
                            Hello, User
                        </div>
                        <div className={`text-sm text-white`}>
                            Welcome Back
                        </div>
                    </div>
                </div>
                <div className={`z-100`}>
                    <LanguageDropdown/>
                </div>

            </div>

            <Image className={`absolute bg-cover`} src={homeBackground} alt={``} width={1500} height={1500}/>

            <div className="h-screen flex items-end justify-center relative">
                <div className="h-full  flex flex-col items-center justify-center w-full">
                    <div className={`w-full px-28 h-full flex flex-col justify-between py-28`}>
                        <div className={`text-white text-opacity-40 text-6xl font-extrabold`}>
                            KROK PLUS
                        </div>
                        <div className="border-t border-white border-opacity-25"></div>

                        <div className={`text-white font-bold text-5xl`}>
                            Get Motivated In Minutes
                        </div>
                        <div className={`text-white font-semibold text-4xl`}>
                            “The earlier you start working on something, the earlier you will see results.”
                        </div>
                        <div className={`text-white font-base text-2xl`}>
                            “Every morning you have two choices: continue to sleep with your dreams, or wake up and chase
                            them.”
                        </div>
                        <div style={{cursor:"pointer"}} onClick={handleStart} className={`w-96`}>
                            <Image src={actionButton} alt={``} width={500} height={500}/>
                        </div>
                    </div>
                </div>
                <div >
                    <Image  className={`h-full w-full py-20 px-20`} src={homeImg} alt={``} height={500} width={500}/>
                </div>
            </div>

        </div>

    </div>;
}

export default HomePage;