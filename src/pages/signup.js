import React, {useEffect, useState} from 'react';
import Image from "next/image";
import LogoWithBlueName from "../../public/logo.svg";
import {createUser} from "@/components/services/auth";
import {toast} from "react-toastify";
import {useRouter} from "next/router";
import {useAuth} from "@/context/AuthContext";
import SplashScreen from "@/pages/components/SplashScreen";

export default function SignUp() {
    const router = useRouter();
    const [firstName, setFirstname] = useState('');
    const [lastName, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isChecked, setIsChecked] = useState(false);

    const {token, loading} = useAuth();

    useEffect(() => {
        if (!loading && !token) {
            router.push('/signin');
        }
    }, [token, loading, router]);

    if (loading){
        return <SplashScreen />
    }
    if (token) {
        router.push('/home');
    }


    const handleSignup = async (e) => {
        e.preventDefault();
        if(password !== confirmPassword) {
            toast.error('Passwords do not match');
            return;
        }
        if(!isChecked) {
            toast.error('Please accept the terms and conditions');
            return;
        }

        try {
            const response = await createUser({first_name: firstName, last_name: lastName, email, password});
            console.log('User created successfully:', response);
            // Handle successful signup (e.g., redirect to login)
            router.replace("/signin");
        } catch (error) {
            console.error('Error during signup:', error);
            toast.error(JSON.stringify(error.response));
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-300 to-blue-500">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <div className="flex justify-center mb-6">
                    <Image src={LogoWithBlueName} alt="Krok Plus" className="h-12" width={100} height={100}/>
                </div>
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Create Your Account</h2>
                <form onSubmit={handleSignup}>
                    <div className="flex flex-col space-y-4">
                        <button
                            className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                            Log in with Facebook
                        </button>
                        <button
                            className="w-full py-2 px-4 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75">
                            Log in with Google
                        </button>
                    </div>
                    <div className="mt-6 flex flex-col space-y-4">
                        <div className={`w-full flex`}>
                            <input
                                type="text"
                                placeholder="First Name"
                                value={firstName}
                                onChange={(e) => setFirstname(e.target.value)}
                                className="w-full me-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                            <input
                                type="text"
                                placeholder="Last Name"
                                value={lastName}
                                onChange={(e) => setLastname(e.target.value)}
                                className="w-full ms-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="E-mail Adress"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>
                    <div className="mt-6 flex items-center">
                        <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={(event) => {
                                setIsChecked(event.target.checked);
                            }}
                            className="h-4 w-4 text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            id="terms"
                        />
                        <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
                            I have read and accept the Terms & Conditions
                        </label>
                    </div>
                    <button
                        type={"submit"}
                        className="mt-6 w-full py-2 px-4 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
                        Create your account
                    </button>
                </form>
                <div className="mt-6 text-center text-gray-600">
                    Already have an account? <div style={{cursor: "pointer"}}
                                                  className="inline text-blue-500 hover:underline">Sign in</div>
                </div>
            </div>
        </div>
    );
};