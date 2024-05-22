import React, {useState} from 'react';

const QuestionsPractice = ({onChange = null}) => {
    const [numberOfQuestions, setNumberOfQuestions] = useState(1);

    const handleIncrease = () => {
        if (numberOfQuestions < 200) {
            setNumberOfQuestions(numberOfQuestions + 1);
            onChange(numberOfQuestions + 1);
        }
    }

    const handleDecrease = () => {
        if (numberOfQuestions > 0) {

            setNumberOfQuestions(numberOfQuestions - 1);
            onChange(numberOfQuestions - 1);
        }
    }

    return (
        <div className="w-full h-full bg-blue-50 p-8 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-blue-900 mb-4">How many questions do you want to practice?</h2>
            <div className="mb-4 text-gray-500">You can have up to 200 questions.</div>
            <div className="flex items-center space-x-2">
                <button onClick={handleDecrease} className="px-2 py-1 bg-blue-100 rounded">{"<"}</button>
                <input onChange={(event) => {
                    setNumberOfQuestions(event.target.value);
                    if (onChange) {
                        onChange(numberOfQuestions);
                    }
                }} type="text" value={numberOfQuestions} className="w-12 text-center border border-gray-300 rounded"
                       defaultValue="1"/>
                <button onClick={handleIncrease} className="px-2 py-1 bg-blue-100 rounded">{">"}</button>
                <input type="text" className="w-16 text-center border border-gray-300 rounded" defaultValue="200"
                       value={200}/>
            </div>
        </div>
    );
};

export default QuestionsPractice;
