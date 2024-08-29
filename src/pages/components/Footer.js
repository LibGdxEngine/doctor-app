import Image from "next/image";
import app1 from "../../../public/Group 21.svg";
import app2 from "../../../public/Group 20.svg";
import follow from "../../../public/follow.svg";
import BGsvg from "../../../public/BG-svg (1).svg";
import {useTranslation} from "react-i18next";

function Footer() {
    const {t, i18n} = useTranslation("common");
    return <>
        <div id={`footer`}
             className={`bg-navyBlue w-full h-fit py-12 mt-0 z-20 flex sm:flex-col items-center justify-between`}>
            <div className={`w-fit flex sm:flex-col items-center justify-center mx-2`}>
                <Image className={`mx-10 sm:my-2`} src={app1} alt={``} width={150} height={150}/>
                <Image src={app2} alt={``} width={130} height={130}/>
            </div>
            <div className={`w-full flex sm:my-2 items-center justify-end`}>

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