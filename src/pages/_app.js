import { appWithTranslation } from 'next-i18next';
import "@/styles/globals.css";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "@/context/AuthContext";
import i18n from '../../i18n';
import Head from 'next/head'; // Import Head for font links if not using CSS @import


function App({ Component, pageProps }) {
    return <div className={`bg-light font-sans`}>
        <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
        </Head>
        <AuthProvider>
            <Component {...pageProps} />
        </AuthProvider>
        <ToastContainer />
    </div>
};

export default appWithTranslation(App);