import SignInPage from "@/pages/components/Auth/SignInPage";
import Image from "next/image";
import woman from "../../public/woman.svg";
import loginLogo from "../../public/loginLogo.svg";
import Footer from "@/pages/components/Footer";
import LogoWithBlueName from "../../public/logo.svg";
import React, {useEffect} from "react";
import {useAuth} from "@/context/AuthContext";
import {getToken, socialAuth} from "@/components/services/auth";
import {toast} from "react-toastify";
import SplashScreen from "@/pages/components/SplashScreen";
import {useRouter} from "next/router";
import Link from "next/link";
import NavBar from "@/pages/components/NavBar";

const Signin = () => {
    const router = useRouter();
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const {login} = useAuth();
    const {token, loading} = useAuth();

    const {access_token, provider} = router.query;

    useEffect(() => {
        if (access_token) {
            socialAuth(provider, access_token).then((response) => {
                toast.success("Logged in successfully");
                login(response.token);
                router.push("/");
            }).catch((error) => {
                console.error('Error during social login:', error);
            });
        }
    }, [access_token, provider]);


    if (loading) {
        return <SplashScreen/>
    }
    if (token) {
        router.push('/home');
    }

    const handleSignIn = async (e) => {
        e.preventDefault();
        try {
            const response = await getToken({email, password});
            login(response.token);
            router.replace("/home");
            // Handle successful signup (e.g., redirect to login)
        } catch (error) {
            toast.error("Invalid credentials", error.toString());
            console.error('Error during signup:', error);
        }
    }
    return <div className={`w-full flex flex-col`}>
        <NavBar />
        <div className="relative min-h-screen bg-contain bg-no-repeat  "
             style={{backgroundImage: 'url(/login_bg.svg)'}}>

            <div className={`w-full flex items-center justify-center`}>
                <div className={`w-full h-screen flex flex-col items-center justify-center`}>
                    <div className={`w-32 mt-10`}>
                        <Image src={loginLogo} alt={``} width={200} height={200}/>
                    </div>
                    <div className={`w-60 mt-20`}>
                        <Image src={woman} alt={``} width={200} height={200}/>
                    </div>
                </div>
                <div className={`w-full h-screen `}>
                    <div className="w-full  flex flex-col justify-center items-center min-h-screen py-12 px-4">
                        <h1 className="text-5xl font-thin mb-8">Sign In</h1>
                        <form onSubmit={handleSignIn} className="w-[60%] flex flex-col space-y-6">
                            <div  className="flex flex-col">
                                <label htmlFor="email" className="mb-2 text-sm font-medium">
                                    E-mail
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="shadow-sm rounded-xl px-4 py-3 focus:outline-none focus:ring-1 focus:ring-indigo-500 w-full"
                                    placeholder="Enter your email"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="password" className="mb-2 text-sm font-medium">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="shadow-sm rounded-xl px-4 py-3 focus:outline-none focus:ring-1 focus:ring-indigo-500 w-full"
                                    placeholder="Enter your password"
                                />
                            </div>
                            <div className="flex items-center">
                                <input type="checkbox" id="terms" className="mr-2"/>
                                <label htmlFor="terms" className="text-sm">
                                    I accept the terms of use and privacy policy
                                </label>
                            </div>
                            <button
                                type={`submit`}
                                className="w-full bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Login
                            </button>
                        </form>
                        <p className="text-sm mt-6 text-center">
                            Do not have any account?{' '}
                            <Link href="/signup" className="text-indigo-600 hover:underline">
                                Sign Up
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
            <Footer/>


        </div>
    </div>
};

export default Signin;