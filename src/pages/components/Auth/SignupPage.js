import LogoWithBlueName from "@/pages/components/utils/LogoWithBlueName";
import SignupInputs from "@/pages/components/Auth/SignupInputs";
import ActionButton from "@/pages/components/utils/ActionButton";
import Image from "next/image";
import LoginWithGoogleBtn from "../../../../public/Login With Google.svg";
import {useRouter} from "next/router";

function SignupPage() {
    const router = useRouter();

    function handleClick() {
        router.push("/home");
    }

    function handleLogin() {
        router.push("/signin");
    }

    return <div id={`signup-page`}
                className={`w-full h-[100vh] flex flex-col items-center justify-start bg-white`}>
        <LogoWithBlueName/>
        <SignupInputs/>
        <div onClick={handleClick} className={`w-full px-3 mt-8`}>
            <ActionButton text={`Signup`}/>
        </div>
        <div className={`flex items-center justify-center w-full px-12 mt-8 `}>
            <span className="flex-grow h-0.5 bg-lightDark"></span>
            <div className="mx-4 text-gray-600">or signup with</div>
            <span className="flex-grow h-0.5 bg-lightDark"></span>
        </div>
        <div onClick={handleLogin} className={`w-full flex items-center justify-center mt-4`}>
            <Image className={`w-full px-12 max-h-12`} src={LoginWithGoogleBtn} alt={``}/>
        </div>
    </div>;
}

export default SignupPage;