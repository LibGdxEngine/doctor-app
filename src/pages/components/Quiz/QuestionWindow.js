import React from 'react';

const QuizPage = () => {
    return (
        <div className="w-full min-h-screen bg-gray-100 p-4 flex flex-col items-center">
            <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-6">
                <div className="w-full flex justify-between items-center">
                    <button className="text-blue-500">Back to generate quiz page</button>
                    <div className="text-2xl font-semibold">Quiz: <span className="text-gray-500">Level 6</span></div>
                    <div className="text-gray-500">199:00</div>
                </div>

                <div className="mt-4">
                    <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center text-lg font-bold">1</div>
                    <div className="mt-2 bg-blue-50 rounded-lg p-4">
                        <p className="text-lg">7. In course of an operation surgeon removed a part of a lung that was ventilated by a tertiary bronchus accompanied by branches of pulmonary artery and other vessels. What part of a lung was removed?</p>
                        <div className="mt-4">
                            {['A. Bronchopulmonary segment', 'B. Bronchopulmonary segment', 'B. Superior lobe', 'C. Middle lobe', 'D. Inferior lobe', 'E. Pulmonary lobule'].map((option, index) => (
                                <div key={index} className="flex items-center mt-2">
                                    <input type="radio" id={`option-${index}`} name="answer" className="mr-2" />
                                    <label htmlFor={`option-${index}`} className="text-gray-700">{option}</label>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="flex justify-between items-center mt-6">
                    <button className="bg-blue-100 text-blue-500 rounded-lg py-2 px-4">{"<"}</button>
                    <div>
                        <button className="bg-gray-200 text-gray-700 rounded-lg py-2 px-4 mr-2">Resume Later</button>
                        <button className="bg-blue-500 text-white rounded-lg py-2 px-4">Check</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuizPage;
