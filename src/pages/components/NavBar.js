import Image from "next/image";
import logo from "../../../public/logo.svg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import user from "../../../public/profile.svg";
import LanguageDropdown from "@/pages/components/utils/LanguageDropdown";
import {useRouter} from "next/router";

const NavBar = () => {
    const router = useRouter();
    return <div  id={`navbar`} className={`w-full h-20 flex md:hidden items-center justify-between navbar ps-20 py-2`}>
        <Image style={{cursor: "pointer"}} onClick={()=>{
            router.push('/home');
        }} src={logo} alt={``} width={50} height={50}/>
        <div className={`w-full flex flex-row items-center justify-between`}>
            <div className={`text-white ms-10 `}>Material</div>
            <div className={`text-white ms-1 `}>Discussion</div>
            <div style={{cursor: "pointer"}} onClick={()=>{
                router.push('/start');
            }} className={`text-white ms-1 line-clamp-1`}>Generate Quiz</div>
        </div>

        <div id={`search-bar`} className={`w-full h-[49px] relative px-5 mt-2`}>
            <input type={"text"}
                   className={`w-full h-full bg-searchColor py-2  border border-customBlue focus:border-lightDark outline-none rounded-full px-2 ps-10`}
            >
            </input>
            <FontAwesomeIcon className={`absolute p-1 left-12 top-[28%] -translate-x-[50%]`} icon={faSearch}
                             style={{color: '#0073D1'}}/>
        </div>

        <div style={{cursor: "pointer"}} onClick={()=>{
            router.push('/profile');
        }} id={`profile-icon-container`} className={`w-full flex items-center justify-start `}>
            <Image  width={35} height={35} src={user} alt={`profile`} objectFit={`cover`}
                   className={`w-10 h-10 rounded-full me-2`}/>
            <div  className={`flex flex-col`}>
                <div  className={`text-xs text-white`}>
                    Hello, User
                </div>
                <div className={`text-sm text-white`}>
                    Welcome Backs
                </div>
            </div>
        </div>
        <div className={`w-fit flex items-end justify-end pe-20 z-100`}>
            <LanguageDropdown/>
        </div>

    </div>
}

export default NavBar;