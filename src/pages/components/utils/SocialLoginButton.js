// components/SocialLoginButton.js

import { useState } from 'react';
import {toast} from "react-toastify";
import {useRouter} from "next/router";

const SocialLoginButton = ({ provider, clientId, redirectUri }) => {
    const router = useRouter();
    const [error, setError] = useState(null);

    const handleSocialLogin = async () => {
        const authUrl = getAuthUrl(provider, clientId, redirectUri);
        console.log(authUrl)
        window.location.href = authUrl;
    };

    const getAuthUrl = (provider, clientId, redirectUri) => {
        const baseUrls = {
            google: `https://accounts.google.com/o/oauth2/auth?response_type=token&client_id=${clientId}&redirect_uri=${redirectUri}&scope=email profile`,
            facebook: `https://www.facebook.com/dialog/oauth?response_type=token&client_id=${clientId}&redirect_uri=${redirectUri}&scope=email`,
            apple: `https://appleid.apple.com/auth/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&scope=email name`,
        };
        return baseUrls[provider];
    };

    return (
        <button onClick={handleSocialLogin}>
            Login with {provider.charAt(0).toUpperCase() + provider.slice(1)}
        </button>
    );
};

export default SocialLoginButton;
