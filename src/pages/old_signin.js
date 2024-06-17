import React, {useEffect, useState} from 'react';
import Image from "next/image";
import LogoWithBlueName from "../../public/logo.svg";
import {getToken, socialAuth} from "@/components/services/auth";
import {useAuth} from "@/context/AuthContext";
import {useRouter} from "next/router";
import SplashScreen from "@/pages/components/SplashScreen";
import {toast} from "react-toastify";
import SocialLoginButton from "@/pages/components/utils/SocialLoginButton";

export default function SignUp() {
    const router = useRouter();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { login } = useAuth();
    const {token, loading} = useAuth();

    const { access_token, provider } = router.query;

    useEffect(() => {
        if (access_token) {
            socialAuth(provider, access_token).then((response) => {
                toast.success("Logged in successfully");
                login(response.token);
                router.push("/home");
            }).catch((error) => {
                console.error('Error during social login:', error);
            });
        }
    }, [access_token, provider]);

    // useEffect(() => {
    //     if (!loading && !token) {
    //         router.push('/signin');
    //     }
    // }, [token, loading, router]);

    if (loading){
        return <SplashScreen />
    }
    if (token) {
        router.push('/home');
    }

    const handleSignIn = async (e) => {
        e.preventDefault();
        try {
            const response = await getToken({ email, password });
            login(response.token);
            router.replace("/home");
            // Handle successful signup (e.g., redirect to login)
        } catch (error) {
            console.error('Error during signup:', error);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-300 to-blue-500">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <div className="flex justify-center mb-6">
                    <Image src={LogoWithBlueName} alt="Krok Plus" className="h-12" width={100} height={100}/>
                </div>
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Login to Your Account</h2>
                <form onSubmit={handleSignIn}>

                    <div className="mt-6 flex flex-col space-y-4">
                        <input
                            type="email"
                            placeholder="E-mail Adress"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />

                    </div>
                    <button
                        className="mt-6 w-full py-2 px-4 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
                        Login
                    </button>

                </form>
                <div>
                    <SocialLoginButton provider="google" clientId="794210030409-1jblj5njdfsn27qnjv0nk326fm0o5oi6.apps.googleusercontent.com"
                                       redirectUri="http://localhost:3000/signin"/>
                    {/*<SocialLoginButton provider="facebook" clientId="<your-facebook-app-id>"*/}
                    {/*                   redirectUri="http://localhost:3000/signin"/>*/}
                    {/*<SocialLoginButton provider="apple" clientId="<your-apple-client-id>"*/}
                    {/*                   redirectUri="http://localhost:3000/signin"/>*/}
                </div>
                <div onClick={() => {
                    router.push('/signup');
                }} className="mt-6 text-center text-gray-600">
                    Do not have an account? <div style={{cursor: "pointer"}}
                                                 className="inline text-blue-500 hover:underline">Sign up</div>
                </div>
            </div>
        </div>
    );
};