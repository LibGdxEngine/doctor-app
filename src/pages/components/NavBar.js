import Image from "next/image";
import logo from "../../../public/logo.svg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import user from "../../../public/profile.svg";
import LanguageDropdown from "@/pages/components/utils/LanguageDropdown";
import {useRouter} from "next/router";
import {useAuth} from "@/context/AuthContext";
import {useState} from "react";

const NavBar = () => {
    const [inputValue, setInputValue] = useState('');
    const router = useRouter();
    const isActive = (path) => router.pathname === path;
    const {token} = useAuth();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim()) {
            router.push({
                pathname: '/search',
                query: {token: inputValue.trim()}
            });
        }
    };
    return <div id={`navbar`} className={`w-full h-20 flex md:hidden items-center justify-between navbar ps-20 py-2`}>
        <Image style={{cursor: "pointer"}} onClick={() => {
            router.push('/');
        }} src={logo} alt={``} width={50} height={50}/>

        <div className="w-full flex flex-row items-center justify-between mx-4">
            <div
                style={{cursor: "pointer"}}
                onClick={() => {
                    router.replace("/");
                }}
                className={`text-base ms-10 group relative ${isActive('/') ? 'text-gray-300' : 'text-white'}`}
            >
                Home
                <div
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-gray-300 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ${isActive('/') ? 'scale-x-100' : ''}`}></div>
            </div>
            <div
                style={{cursor: "pointer"}}
                onClick={() => {
                    router.replace("/material");
                }}
                className={`text-base ms-1 group relative ${isActive('/material') ? 'text-gray-300' : 'text-white'}`}
            >
                Material
                <div
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-gray-300 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ${isActive('/material') ? 'scale-x-100' : ''}`}></div>
            </div>
            <div
                style={{cursor: "pointer"}}
                onClick={() => {
                    router.push('/start');
                }}
                className={`text-base ms-1 line-clamp-1 group relative ${isActive('/start') ? 'text-gray-300' : 'text-white'}`}
            >
                Generate Quiz
                <div
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-gray-300 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ${isActive('/start') ? 'scale-x-100' : ''}`}></div>
            </div>
        </div>

        <form onSubmit={handleSubmit} className="w-full h-[49px] relative px-5 mt-2">
            <div id="search-bar" className="w-full h-full relative">
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="w-full h-full bg-white py-2 focus:border-lightDark outline-none rounded-full px-2 ps-12"
                    placeholder={`search about ....`}
                />
                <FontAwesomeIcon
                    className="absolute p-1 left-8 top-[28%] -translate-x-[50%]"
                    icon={faSearch}
                    style={{color: '#0073D1'}}
                />
            </div>
            {inputValue && (
                <button type="submit"
                        className="absolute right-7 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white py-2 px-4 rounded-full">
                    Search
                </button>
            )}
        </form>

        <div className={`w-fit flex items-end justify-end mx-10 z-100`}>
            <LanguageDropdown/>
        </div>

        <div style={{cursor: "pointer"}} onClick={() => {
            router.push('/profile');
        }} id={`profile-icon-container`}
             className={`w-full  flex items-center justify-end pe-10`}>
            <Image width={35} height={35} src={user} alt={`profile`} objectFit={`cover`}
                   className={`w-10 h-10 rounded-full me-2`}/>
            <div className={`flex flex-col`}>
                {token ? <>
                    <div className={`text-xs text-black`}>
                        Hello, User
                    </div>
                    <div className={`text-sm text-black`}>
                        Welcome Backs
                    </div>
                </> : <div>
                    <div className={`text-sm text-black`}>
                        Authentication
                    </div>

                </div>}
            </div>
        </div>

    </div>
}

export default NavBar;