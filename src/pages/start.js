import ActionButton from "@/pages/components/utils/ActionButton";
import {useRouter} from "next/router";
import CheckButton from "@/pages/components/utils/CheckButton";
import Footer from "@/pages/components/Footer";
import NavBar from "@/pages/components/NavBar";
import {useAuth} from "@/context/AuthContext";
import SplashScreen from "@/pages/components/SplashScreen";
import {useEffect, useState} from "react";
import {getLanguages, getSpecificities, getLevels} from "@/components/services/questions";
import {toast} from "react-toastify";
import SearchBar from "@/pages/components/Home/SearchBar";
import SectionsHeader from "@/pages/components/SectionsHeader";


const Start = () => {
    const router = useRouter();
    const {token, loading} = useAuth();

    const [selectedLanguages, setSelectedLanguages] = useState([]);
    const [selectedSpecificities, setSelectedSpecificities] = useState([]);
    const [selectedLevels, setSelectedLevels] = useState([]);

    const [languages, setLanguages] = useState([]);
    const [specificities, setSpecificities] = useState([]);
    const [levels, setLevels] = useState([]);

    useEffect(() => {
        if (token) {
            getLanguages(token).then((response) => {
                setLanguages(response);
            }).catch((error) => {
                console.error('Error fetching languages:', error);
            });
            getSpecificities(token).then((response) => {
                setSpecificities(response);
            }).catch((error) => {
                console.error('Error fetching languages:', error);
            });
            getLevels(token).then((response) => {
                setLevels(response);
            }).catch((error) => {
                console.error('Error fetching languages:', error);
            });
        }
    }, [token]);


    useEffect(() => {
        if (!loading && !token) {
            router.push('/signin');
        }
    }, [token, loading, router]);

    if (loading) {
        return <SplashScreen/>
    }

    if (!levels || !languages || !specificities) {
        return <SplashScreen/>
    }


    function handleNext() {
        if (selectedLevels.length === 0 || selectedLanguages.length === 0 || selectedSpecificities.length === 0) {
            toast.error("Please select at least one option")
            return;
        }
        localStorage.setItem("state", JSON.stringify({
            "language": selectedLanguages[0],
            "specificity": selectedSpecificities[0],
            "level": selectedLevels[0]
        }))
        router.push({
            pathname: '/year'
        });
    }

    return <div className={`w-full h-fit flex flex-col items-start justify-start bg-white`}>
        <div className={`w-full hidden sm:block`}>
            <SearchBar/>
            <SectionsHeader />
        </div>
        <NavBar/>

        <div className={`w-full h-full flex flex-col items-start justify-start  pt-20`}>
            <div className={`w-full px-20 sm:px-2 flex flex-col items-start`}>
                <div className={`font-bold text-5xl text-ldarkBlue sm:text-sm`}>Please choose your Krok specifics</div>
                <div id={`lang`} className={`sm:w-full flex sm:flex-col sm:items-start items-center justify-center my-10`}>
                    <div className={`w-32 sm:mx-4 font-semibold text-2xl text-ldarkBlue`}>
                        Language
                    </div>
                    <div className={`sm:w-full flex mx-4 sm:mx-0`}>
                        {languages.map((language, index) => {
                            return <CheckButton key={index} text={language.name} onClick={() => {
                                setSelectedLanguages([...selectedLanguages, language.id]);
                            }}/>
                        })}
                    </div>
                </div>
                <div id={`spec`} className={`sm:w-full flex sm:flex-col sm:items-start items-center justify-center mb-10`}>
                    <div className={`w-32 sm:w-full sm:mx-4 font-semibold text-2xl text-ldarkBlue`}>
                        Specialty
                    </div>
                    <div className={`sm:w-full flex mx-4 sm:mx-0`}>

                        {specificities.map((specific, index) => {
                            return <CheckButton key={index} text={specific.name} onClick={() => {
                                setSelectedSpecificities([...selectedSpecificities, specific.id])
                            }}/>
                        })}

                    </div>
                </div>
                <div id={`level`} className={`sm:w-full w-fit flex sm:flex-col sm:items-start items-center justify-center my-0`}>
                    <div className={`w-32 sm:w-full sm:mx-4  font-semibold text-2xl text-ldarkBlue`}>
                        Level
                    </div>
                    <div className={`sm:w-full flex mx-4 sm:mx-0`}>
                        {levels.map((level, index) => {
                            return <CheckButton key={index} text={level.name} onClick={() => {
                                setSelectedLevels([...selectedLevels, level.id]);
                            }}/>
                        })}
                    </div>
                </div>
                <div onClick={handleNext} id={`next-btn`} className={`w-2/3 sm:w-full mt-10`}>
                    <ActionButton text={`Next`}/>
                </div>
            </div>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <Footer/>

    </div>
};

export default Start;