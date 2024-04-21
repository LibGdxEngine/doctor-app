import LogoWithBlueName from "@/pages/components/utils/LogoWithBlueName";
import SignupInputs from "@/pages/components/Auth/SignupInputs";
import ActionButton from "@/pages/components/utils/ActionButton";
import Image from "next/image";
import LoginWithGoogleBtn from "../../../../public/Login With Google.svg";
import SigninInputs from "@/pages/components/Auth/SigninInputs";
import {useRouter} from "next/router";

function RememberMeCheckbox() {
    return (
        <div className="flex items-center"> {/* For alignment */}
            <input
                type="checkbox"
                id="my-checkbox"
                className="mr-2 border-gray-300 rounded "
            />
            <label
                htmlFor="my-checkbox"
                className="text-xs font-semibold text-gray-900 "
            >
                Remember me
            </label>
        </div>
    );
}

function SignInPage() {
    const router = useRouter();
    function handleLogin() {
        router.push('/home');
    }

    return <div id={`signup-page`}
                className={`w-full h-[100vh] flex flex-col items-center justify-start bg-white`}>
        <LogoWithBlueName/>
        <SigninInputs/>
        <div className={`w-full flex items-center justify-between px-3 mt-2`}>
            <RememberMeCheckbox />
            <div className={`text-mRed text-xs`}>Forget password?</div>
        </div>
        <div onClick={handleLogin} className={`w-full px-3 mt-6`}>
            <ActionButton text={`Log in`}/>
        </div>
        <div className={`flex items-center justify-center w-full px-12 mt-8 `}>
            <span className="flex-grow h-0.5 bg-lightDark"></span>
            <div className="mx-4 text-gray-600">or continue with</div>
            <span className="flex-grow h-0.5 bg-lightDark"></span>
        </div>
        <div  className={`w-full flex items-center justify-center mt-4`}>
            <Image  className={`w-full px-12 max-h-12`} src={LoginWithGoogleBtn} alt={``}/>
        </div>
    </div>;
}

export default SignInPage;