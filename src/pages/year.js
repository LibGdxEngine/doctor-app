import {useRouter} from "next/router";

import ActionButton from "@/pages/components/utils/ActionButton";
import CheckButton from "@/pages/components/utils/CheckButton";
import Footer from "@/pages/components/Footer";
import NavBar from "@/pages/components/NavBar";
import StepBar from "@/pages/components/utils/StepBar";
import {useEffect, useState} from "react";
import {useAuth} from "@/context/AuthContext";
import {getYears} from "@/components/services/questions";
import {toast} from "react-toastify";

const Year = () => {

    const router = useRouter();
    const {token, loading} = useAuth();
    const [state, setState] = useState(null);
    const [selectedYears, setSelectedYears] = useState([]);
    const [years, setYears] = useState([]);

    useEffect(() => {
        if (token) {
            getYears(token).then((response) => {
                setYears(response);
            }).catch((error) => {
                console.error('Error fetching years:', error);
            });
        }
    }, [token]);

    useEffect(() => {
        setState(JSON.parse(localStorage.getItem("state")));
    }, []);


    function handleNext() {
        if (selectedYears.length === 0) {
            toast.error("Please select at least one year");
            return;
        }
        localStorage.setItem("state", JSON.stringify({...state, "years": selectedYears}));
        router.push("/subject");
    }

    return <div className={`w-full h-fit flex flex-col items-start justify-start bg-white`}>

        <NavBar/>

        <div className={`flex flex-col items-start mx-20`}>
            <div className={`w-full h-full flex flex-col items-start justify-start  pt-20`}>
                <StepBar stepNumber={1}/>
                <div className={`w-full grid grid-cols-6 mt-10 space-x-2`}>
                    {years.map((year, index) => {
                        return <CheckButton text={year.year} key={index}
                                            onClick={() => setSelectedYears([...selectedYears, year.id])}
                        />
                    })}
                </div>
                <div onClick={handleNext} id={`next-btn`} className={`w-1/2 mt-10`}>
                    <ActionButton text={`Next`}/>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
};

export default Year;