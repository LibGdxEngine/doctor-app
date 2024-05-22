import QuestionWindow from "@/pages/components/Quiz/QuestionWindow";
import NavBar from "@/pages/components/NavBar";
import Footer from "@/pages/components/Footer";
import {useRouter} from "next/router";
import {useAuth} from "@/context/AuthContext";
import {useEffect, useState} from "react";
import {getExamJourney} from "@/components/services/questions";

const Quiz = () => {
    const router = useRouter();
    let {id, q} = router.query;
    if (!q) {
        q = 0;
    }
    const {token, loading} = useAuth();
    const [examObject, setExamObject] = useState(null);
    let length = examObject ? examObject.questions.length : 1;
    useEffect(() => {
        if (token && id) {
            getExamJourney(token, id).then((response) => {
                setExamObject(response);
            }).catch((error) => {
                console.error('Error fetching exam:', error);
            });
        }

    }, [token, id]);

    return <div className={`w-full flex flex-col items-start justify-center bg-white`}>
        <NavBar/>
        <div className={`w-full h-full items-center justify-center`}>
            {examObject &&
                <QuestionWindow questions={examObject.questions[q]}
                                numbers={Array.from({length}, (v, i) => i + 1)}
                                questionIndex={q}
                                timeLeft={examObject.time_left}
                />}
        </div>
        <Footer/>
    </div>
}
export default Quiz;