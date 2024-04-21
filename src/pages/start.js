import Image from "next/image";
import logo from "../../public/logo.svg";
import checked from "../../public/tickcircleunchecked.svg";
import unchecked from "../../public/tickcircle.svg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import user from "../../public/userplaceholder.jpeg";
import LanguageDropdown from "@/pages/components/utils/LanguageDropdown";
import {useState} from "react";
import ActionButton from "@/pages/components/utils/ActionButton";
import {useRouter} from "next/router";
import CheckButton from "@/pages/components/utils/CheckButton";
import Footer from "@/pages/components/Footer";


const Start = () => {
    const router = useRouter();

    function handleNext() {
        router.push("/year");
    }

    return <div className={`w-full h-fit flex flex-col items-start justify-start bg-white`}>

        <div id={`navbar`} className={`w-full h-fit flex items-center justify-between navbar px-20`}>
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

        <div className={`w-full h-full flex flex-col items-start justify-start mx-20 pt-20`}>
            <h1 className={`font-bold text-5xl text-ldarkBlue`}>Please choose your Krok specifics</h1>
            <div id={`lang`} className={`flex items-center justify-center my-10`}>
                <div className={`font-semibold text-xl text-ldarkBlue`}>
                    Language
                </div>
                <div className={`flex mx-4`}>

                    <CheckButton text={'English'}/>
                    <CheckButton text={'Ukrainian'}/>

                </div>
            </div>
            <div id={`lang`} className={`flex items-center justify-center mb-10`}>
                <div className={`font-semibold text-xl text-ldarkBlue`}>
                    Specialty
                </div>
                <div className={`flex mx-4`}>

                    <CheckButton text={'Medicine'}/>
                    <CheckButton text={'Pharmacy'}/>
                    <CheckButton text={'Dentist'}/>

                </div>
            </div>
            <div id={`lang`} className={`flex items-center justify-center my-0`}>
                <div className={`font-semibold text-xl text-ldarkBlue`}>
                    Level
                </div>
                <div className={`flex mx-4`}>

                    <CheckButton text={'Krok 1'}/>
                    <CheckButton text={'Krok 2'}/>
                    <CheckButton text={'Krok 3'}/>

                </div>
            </div>
            <div onClick={handleNext} id={`next-btn`} className={`w-1/2 mt-10`}>
                <ActionButton text={`Next`}/>
            </div>
        </div>

        <Footer />

    </div>
};

export default Start;