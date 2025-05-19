import { appWithTranslation } from 'next-i18next';
import "@/styles/globals.css";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "@/context/AuthContext";
import { Open_Sans } from 'next/font/google'; // Note the underscore
import i18n from '../../i18n';
import Head from 'next/head'; // Import Head for font links if not using CSS @import

// Configure Open Sans
const openSans = Open_Sans({
  subsets: ['latin'], // Specify the subsets you need
  weight: ['300', '400', '500', '600', '700', '800'], // Specify desired weights
  display: 'swap', // Recommended for performance
  variable: '--font-open-sans', // This creates a CSS variable
});




function App({ Component, pageProps }) {
    return <div className={`bg-light ${openSans.variable} font-sans`}>
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