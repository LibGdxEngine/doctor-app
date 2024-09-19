import Image from "next/image";
import app1 from "../../../public/GetItOnGooglePlay_Badge_Web_color_English.png";
import app2 from "../../../public/Download_on_the_App_Store_Badge_US-UK_RGB_wht_092917.svg";
import follow from "../../../public/follow.svg";
import BGsvg from "../../../public/BG-svg (1).svg";
import {useTranslation} from "react-i18next";
import LanguageDropdown from "@/pages/components/utils/LanguageDropdown";

function Footer() {
    const {t, i18n} = useTranslation("common");
    return <>
        <div id={`footer `}
             className={`bg-navyBlue w-full h-fit py-4  z-20 flex sm:flex-col sm:justify-center items-center justify-between`}>
  
            <div className={`w-full  flex sm:flex-col sm:space-y-2 items-center justify-start`}>
                <Image className={`me-8 ms-10 sm:m-0`} src={app1} alt={``} width={135} height={135}/>
                <Image src={app2} alt={``} width={135} height={135}/>
            </div>
            <div className={`w-fit  bg-white rounded-xl items-end justify-end mx-10 hidden sm:flex mt-2`}>
                <LanguageDropdown/>
            </div>
            <div className={`w-full  h-full flex sm:my-2 items-center sm:justify-center sm:ms-12 justify-end`}>

                <Image
                    src={BGsvg}
                    alt="Telegram Icon"
                    width={42}
                    height={45}
                    className="object-contain mt-10 mx-4"
                />
                <Image className={`me-10`} src={follow} alt={``} width={150} height={150}/>
            </div>

        </div>
        <div className={`w-full h-10 bg-darkBlue text-center text-white text-xs flex items-center justify-center`}>
        {t("AllRights")} - KROK PLUS
        </div>
    </>;
}

export default Footer;