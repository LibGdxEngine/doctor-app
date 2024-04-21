import Image from "next/image";
import searchIcon from "../../../../public/searchIcon.svg";
import {faSearch} from "@fortawesome/free-solid-svg-icons";

function SearchBar() {
    return <div id={`search-bar`} className={`w-full relative px-5 mt-2`}>
        <input type={"text"}
               className={`w-full h-full py-2 border border-lightDark focus:border-lightDark outline-none rounded-8 px-2 ps-10`}
               placeholder={`Search`}>
        </input>
        <Image src={searchIcon} alt={`search`} className={`absolute p-1 left-10 top-[5%] -translate-x-[50%]`}
               icon={faSearch}/>
    </div>;
}

export default SearchBar;