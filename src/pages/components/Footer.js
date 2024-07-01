import Image from "next/image";
import app1 from "../../../public/Group 21.svg";
import app2 from "../../../public/Group 20.svg";
import follow from "../../../public/follow.svg";

function Footer() {
    return <>
        <div id={`footer`} className={`bg-navyBlue w-full h-fit py-12 mt-0 z-20 flex items-center justify-between`}>
            <div className={`w-fit flex items-center justify-center`}>
                <Image className={`mx-10`} src={app1} alt={``} width={150} height={150}/>
                <Image src={app2} alt={``} width={150} height={150}/>
            </div>
            <div className={`w-fit flex items-center justify-center`}>
                <Image className={`mx-10`} src={follow} alt={``} width={150} height={150}/>
            </div>

        </div>
        <div className={`w-full h-10 bg-darkBlue text-center text-white text-xs flex items-center justify-center`}>
            All rights reserved to - KROK PLUS
        </div>
    </>;
}

export default Footer;