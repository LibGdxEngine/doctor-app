import LogoWithBlueName from "@/pages/components/utils/LogoWithBlueName";
import SignupInputs from "@/pages/components/Auth/SignupInputs";
import ActionButton from "@/pages/components/utils/ActionButton";
import Image from "next/image";
import LoginWithGoogleBtn from "../../../../public/Login With Google.svg";
import {useRouter} from "next/router";
import React, {useState} from "react";
import {useAuth} from "@/context/AuthContext";
import SplashScreen from "@/pages/components/SplashScreen";
import {toast} from "react-toastify";
import {createUser} from "@/components/services/auth";

function SignupPage() {
    const router = useRouter();
    const [firstName, setFirstname] = useState('');
    const [lastName, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isChecked, setIsChecked] = useState(true);
    const {token, loading} = useAuth();


    if (loading) {
        return <SplashScreen/>
    }
    if (token) {
        router.push('/home');
    }


    function handleLogin() {
        // Social login
    }

    const handleSignup = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            toast.error('Passwords do not match');
            return;
        }
        if (!isChecked) {
            toast.error('Please accept the terms and conditions');
            return;
        }

        try {
            const response = await createUser({first_name: firstName, last_name: lastName, email, password});
            toast.success('User created successfully');
            // Handle successful signup (e.g., redirect to login)
            router.replace("/signin");
        } catch (error) {
            console.error('Error during signup:', error);
            toast.error(JSON.stringify(error.response));
        }
    };


    return <div id={`signup-page`}
                className={`w-full h-full flex flex-col items-center justify-start bg-white`}>
        <LogoWithBlueName/>
        <SignupInputs
            firstName={firstName}
            setFirstName={setFirstname}
            lastName={lastName}
            setLastName={setLastname}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            confirmPassword={confirmPassword}
            setConfirmPassword={setConfirmPassword}
        />
        <div onClick={handleSignup} className={`w-full px-3 mt-8`}>
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
        <div onClick={() => {
            router.push('/signin');
        }} className={`w-full h-full text-center mt-4 bg-white mb-20`}>
            Already have an account ? <span className={`w-full px-2 max-h-12 underline`}>Sign In</span>
        </div>
    </div>;
}

export default SignupPage;