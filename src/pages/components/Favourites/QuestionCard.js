// components/QuestionCard.js
import React from 'react';

const QuestionCard = ({ number, question, answers, correctAnswer }) => {
    if(!answers){
        return <div>Loading...</div>
    }
    return (
        <div className="w-full px-10 mx-20 bg-white shadow-md rounded-lg p-6">
            <h1 className="text-2xl font-semibold mb-4 text-black">Question {number}</h1>
            <h2 className="text-xl font-semibold mb-4 text-black">{question}</h2>
            <ul className="grid grid-cols-1 gap-4">
                {answers.map((answer, index) => (
                    <li key={index} className="flex items-center">
                        <input
                            type="radio"
                            id={`answer-${index}`}
                            name="answers"
                            value={answer.answer}
                            className="mr-2"
                        />
                        <label htmlFor={`answer-${index} text-black`}>{answer.answer}</label>
                    </li>
                ))}
            </ul>
            <p className="mt-4 text-green-700">Correct Answer: {correctAnswer}</p>
        </div>
    );
};

export default QuestionCard;
