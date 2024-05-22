import React, {useState} from 'react';
import NumberScroll from "@/pages/components/Quiz/NumberScroll";
import QuestionItem from "@/pages/components/Quiz/QuestionItem";
import Image from "next/image";
import icon1 from "../../../../public/icon_1.svg";
import icon2 from "../../../../public/icon_2.svg";
import icon3 from "../../../../public/icon_3.svg";
import {toast} from "react-toastify";
import CountdownTimer from "@/pages/components/Quiz/CountdownTimer";
import {useRouter} from "next/router";

const QuestionWindow = ({questions, numbers, questionIndex, timeLeft}) => {
    const router = useRouter();
    if (!timeLeft) {
        timeLeft = 500;
    }
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [showResults, setShowResults] = useState(false);
    const [progress, setProgress] = useState({});

    const calculateTruePercentage = (progress) => {
        const values = Object.values(progress);
        const total = values.length;
        const trueCount = values.filter(value => value === true).length;
        return (trueCount / total) * 100;
    };

    const handleAnswerClicked = () => {
        if (selectedAnswer === null) {
            toast.error("Select At least one Answer");
            return;
        }
        setProgress(prevProgress => ({
            ...prevProgress,
            [questionIndex]: questions.answers[selectedAnswer] === questions.correct_answer
        }));
        if (questionIndex === numbers.length - 1) {
            setShowResults(true);
        }
    };

    const handleAnswer = (index) => {
        setSelectedAnswer(index);
    };

    return (
        <div className="w-full h-full min-h-screen bg-white p-4 flex flex-col items-center">

            <div className="w-full max-w-5xl bg-white p-6">
                <div style={{cursor: "pointer"}} className="text-green-500 text-2xl hover:underline">
                    Back to generate quiz page
                </div>
                <div className="w-full mt-4 flex justify-between items-center pe-4">
                    <div className="text-navyBlue text-3xl font-semibold">Quiz: <span
                        className="text-2xl text-gray-500">Level 6</span>
                    </div>
                    <div className={`w-full flex items-center justify-center`}>
                        <Image className={`mx-2`} src={icon1} alt={``} width={35} height={35}/>
                        <Image className={`mx-2`} src={icon2} alt={``} width={35} height={35}/>
                        <Image className={`mx-2`} src={icon3} alt={``} width={35} height={35}/>
                    </div>
                    <CountdownTimer initialSeconds={timeLeft}/>
                </div>

                <div className="w-full flex mt-4 max-h-screen">
                    {showResults ? <>
                            <div className="w-full mt-2 bg-blue-50 rounded-xl p-4 mx-4 text-3xl text-center">
                                Your score is {calculateTruePercentage(progress)}%
                            </div>
                        </>
                        : <>
                            <div className={`w-fit max-h-[416px] pt-2`}>
                                <NumberScroll numbers={numbers}/>
                            </div>

                            <div className="w-full mt-2 bg-blue-50 rounded-xl p-4 mx-4">
                                <p className="text-lg font-bold">
                                    {questions.text}</p>
                                <div className="w-full mt-4">
                                    {questions.answers.map((option, index) => (
                                        <QuestionItem question={option} index={index}
                                                      isSelected={index === selectedAnswer}
                                                      key={index} onAnswer={handleAnswer}/>
                                    ))}
                                </div>
                            </div>
                        </>}

                </div>

                <div className="flex justify-between items-center mt-6 pe-4">
                    <button
                        className={`w-40 bg-blue-100 text-blue-500 rounded-lg py-2 px-4 ${showResults ? "hidden" : ""}`}>{"<"}</button>
                    .
                    <div>
                        <button
                            className={`w-40 bg-gray-200 text-gray-700 rounded-lg py-2 px-4 mr-2 ${showResults ? "hidden" : ""}`}>Resume
                            Later
                        </button>
                        {showResults ? <button onClick={() => {
                                router.replace("/home");
                            }}
                                               className="w-40 bg-blue-500 text-white rounded-lg py-2 px-4">Go to home
                            </button>
                            :
                            <button onClick={handleAnswerClicked}
                                    className="w-40 bg-blue-500 text-white rounded-lg py-2 px-4">Check
                            </button>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuestionWindow;
