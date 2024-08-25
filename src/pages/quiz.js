import QuestionWindow from "@/pages/components/Quiz/QuestionWindow";
import NavBar from "@/pages/components/NavBar";
import Footer from "@/pages/components/Footer";
import {useRouter} from "next/router";
import {useAuth} from "@/context/AuthContext";
import {useEffect, useState} from "react";
import {getExamJourney, updateExamJourney} from "@/components/services/questions";
import SearchBar from "@/pages/components/Home/SearchBar";
import SectionsHeader from "@/pages/components/SectionsHeader";

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
        <div className={`w-full hidden md:block`}>
            <SearchBar/>
            <SectionsHeader/>
        </div>
        <NavBar/>

        <div className={`w-full h-full items-center justify-center`}>

            {examObject &&
                <QuestionWindow
                    examJourneyId={id}
                    questions={examObject.questions[q]}
                    numbers={Array.from({length}, (v, i) => i + 1)}
                    questionIndex={q}
                    type={examObject.type}
                    progress={examObject.progress}
                    timeLeft={examObject.time_left}
                    onCheck={(selectedAnswer, time_left) => {
                        updateExamJourney(token, id, {
                            time_left,
                            progress: {
                                ...examObject.progress, [q.toString()]: {
                                    question_text: examObject.questions[q].text,
                                    answer: selectedAnswer,
                                    is_correct: examObject.questions[q].correct_answer === selectedAnswer
                                }
                            },
                            current_question: parseInt(q) + 1
                        }).then((response) => {
                            examObject.progress = {
                                ...examObject.progress,
                                [q.toString()]: {
                                    question_text: examObject.questions[q].text,
                                    answer: selectedAnswer,
                                    is_correct: examObject.questions[q].correct_answer === selectedAnswer
                                }
                            };
                            if (q < length - 1) {
                                router.push(`/quiz?id=${id}&q=${parseInt(q) + 1}`);
                            }
                        }).catch((error) => {
                            console.error('Error updating exam:', error);
                        });

                    }}
                />}
        </div>

        <br/>
        <Footer/>
    </div>
}
export default Quiz;