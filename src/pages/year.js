import {useRouter} from "next/router";
import Image from "next/image";
import logo from "../../public/logo.svg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import user from "../../public/userplaceholder.jpeg";
import LanguageDropdown from "@/pages/components/utils/LanguageDropdown";
import ActionButton from "@/pages/components/utils/ActionButton";
import CheckButton from "@/pages/components/utils/CheckButton";
import Footer from "@/pages/components/Footer";

const Year = () => {

    const router = useRouter();

    function handleNext() {
        router.push("/subject");
    }

    return <div className={`w-full h-fit flex flex-col items-start justify-start bg-white`}>

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

        <div className={`w-full h-full flex flex-col items-start justify-start mx-20 pt-20`}>
            <h1 className={`font-bold text-5xl text-ldarkBlue`}>Please choose your Krok specifics</h1>
            <div className={`w-[90%] h-20 border border-ldarkBlue rounded-2xl flex items-center justify-between px-20 mt-10`}>
                <p className={`text-ldarkBlue text-2xl font-semibold`}>Year</p>
                <p className={`text-gray-300 text-2xl font-semibold`}>Subject</p>
                <p className={`text-gray-300 text-2xl font-semibold`}>System</p>
                <p className={`text-gray-300 text-2xl font-semibold`}>Topic</p>
            </div>
            <div className={`w-full grid grid-cols-6 mt-10`}>
                <CheckButton text={'2024-April'}/>
                <CheckButton text={'2024-April'}/>
                <CheckButton text={'2024-April'}/>
                <CheckButton text={'2024-April'}/>
                <CheckButton text={'2024-April'}/>
                <CheckButton text={'2024-April'}/>
                <CheckButton text={'2024-April'}/>
                <CheckButton text={'2024-April'}/>
                <CheckButton text={'2024-April'}/>
                <CheckButton text={'2024-April'}/>
                <CheckButton text={'2024-April'}/>
                <CheckButton text={'2024-April'}/>
                <CheckButton text={'2024-April'}/>
                <CheckButton text={'2024-April'}/>
                <CheckButton text={'2024-April'}/>
                <CheckButton text={'2024-April'}/>
                <CheckButton text={'2024-April'}/>
                <CheckButton text={'2024-April'}/>
                <CheckButton text={'2024-April'}/>
                <CheckButton text={'2024-April'}/>
                <CheckButton text={'2024-April'}/>
                <CheckButton text={'2024-April'}/>
                <CheckButton text={'2024-April'}/>
                <CheckButton text={'2024-April'}/>
            </div>
            <div onClick={handleNext} id={`next-btn`} className={`w-1/2 mt-10`}>
                <ActionButton text={`Next`}/>
            </div>
        </div>
        <Footer />
    </div>
};

export default Year;