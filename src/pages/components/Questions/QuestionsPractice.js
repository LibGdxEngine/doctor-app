import React, {useEffect, useState} from 'react';

const QuestionsPractice = ({onChange = null, questionsCount}) => {
    const [numberOfQuestions, setNumberOfQuestions] = useState(10);

    const handleIncrease = () => {
        if (numberOfQuestions < 200) {
            setNumberOfQuestions((prevState) => prevState + 1);
        }
    }

    const handleDecrease = () => {
        if (numberOfQuestions > 0) {
            setNumberOfQuestions((prevState) => prevState - 1);
        }
    }

    useEffect(() => {
        onChange(numberOfQuestions);
    }, [numberOfQuestions, onChange]);

    return (
        <div className="w-full h-full bg-blue-50 p-8 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-blue-900 mb-4">How many questions do you want to practice?</h2>
            <div className="mb-4 text-gray-500">You can have up to {questionsCount} questions.</div>
            <div className="flex items-center space-x-2">
                <button onClick={handleDecrease} className="px-2 py-1 bg-blue-100 rounded">{"<"}</button>
                <input onChange={()=>{
                    setNumberOfQuestions(parseInt(event.target.value));
                }} type="text" value={numberOfQuestions} className="w-12 text-center border border-gray-300 rounded"
                       defaultValue="10"/>
                <button onClick={handleIncrease} className="px-2 py-1 bg-blue-100 rounded">{">"}</button>
                <input type="text" className="w-16 text-center border border-gray-300 rounded" defaultValue="200"
                       value={questionsCount}/>
            </div>
        </div>
    );
};

export default QuestionsPractice;
