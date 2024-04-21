import {useState} from "react";
import Image from "next/image";
import arrowDown from "../../../../public/arrowdown2.svg";

function FaqItem({question, answer}) {
    const [expanded, setExpanded] = useState(false);
    return (
        <div className={`flex flex-col mt-2 items-center justify-center m-3`}>
            <div
                className={`w-full  h-12  max-h-screen border-[0.5px] px-2 border-lightDark flex flex-row items-center justify-between`}
                onClick={() => {
                    setExpanded(!expanded);
                }}>
                <div className={``} onClick={() => {
                    setExpanded(!expanded);
                }}>
                    {question}
                </div>
                <Image onClick={() => {
                    setExpanded(!expanded);
                }} src={arrowDown} alt="" width={15} height={15}
                       className={`transform ${expanded ? 'rotate-180' : 'rotate-0'}`}/>

            </div>
            {expanded && (
                <div className="w-full px-2 flex items-start">
                    {answer}
                </div>
            )}
        </div>

    );
}

function HomeFAQs() {
    const faqData = [
        {
            question: "Question 1",
            answer: "Answer to question 1"
        },
        {
            question: "Question 2",
            answer: "Answer to question 2"
        },
        {
            question: "Question 3",
            answer: "Answer to question 3"
        }
        // Add more questions and answers as needed
    ];

    return <div id={`faqs`} className={`mx-4 mt-2`}>
        <div className={`text-base font-bold mb-2`}>Frequently Asked Questionsِ</div>
        <div className={`w-full h-full grid grid-cols-2 lg:grid-cols-1`}>
            {faqData.map((faq, index) => (
                <FaqItem key={index} question={faq.question} answer={faq.answer}/>
            ))}
        </div>

    </div>;
}

export default HomeFAQs;