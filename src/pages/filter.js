import ActionButtons from "@/pages/components/Questions/ActionButtons";
import QuestionsPractice from "@/pages/components/Questions/QuestionsPractice";
import QuestionsFilter from "@/pages/components/Questions/QuestionsFilter";
import Footer from "@/pages/components/Footer";
import NavBar from "@/pages/components/NavBar";
import KrokSpecifics from "@/pages/components/Questions/KrokSpecifics";
import {createExamJourney} from "@/components/services/questions";
import {useAuth} from "@/context/AuthContext";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";

const Filter = () => {
    const router = useRouter();
    const {token, loading} = useAuth();
    const [state, setState] = useState(null);
    const [numberOfQuestions, setNumberOfQuestions] = useState(10);

    useEffect(() => {
        setState(JSON.parse(localStorage.getItem("state")));
    }, []);


    const handleOnCreateJourneyClicked = (isExam) => {
        createExamJourney(token, {...state,"number_of_questions": numberOfQuestions}).then((response) => {
            router.push({
                pathname: '/quiz',
                query: {id: response.id}
            });
        }).catch((error) => {
            console.error('Error creating journey:', error);
        });
    }
    return <div className={`w-full h-screen bg-white flex  flex-col items-start justify-start`}>
        <NavBar/>
        <div className={`w-full`}>

            <div className="w-full h-full  flex flex-col items-center justify-center">

                <div className={`w-full px-6 pt-10`}>
                    <KrokSpecifics/>
                </div>
                <div className="w-full grid grid-cols-2 md:grid-cols-2 gap-6 p-6 bg-white rounded-lg ">
                    <QuestionsFilter/>
                    <div className={`w-full flex flex-col items-start justify-end`}>
                        <QuestionsPractice onChange={(number) => {
                            setNumberOfQuestions(number);
                        }}/>
                        <ActionButtons onClick={handleOnCreateJourneyClicked}/>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
};

export default Filter;