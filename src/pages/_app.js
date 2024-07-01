import "@/styles/globals.css";
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from "react-toastify";
import {AuthProvider} from "@/context/AuthContext";

export default function App({Component, pageProps}) {
    return <div className={`bg-light`}>
        <AuthProvider>
            <Component {...pageProps} />
        </AuthProvider>
        <ToastContainer/>
    </div>
}
