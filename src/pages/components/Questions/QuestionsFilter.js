import React from 'react';

const QuestionsFilter = () => {
    return (
        <div className="w-full bg-blue-50 p-8 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-blue-900 mb-4">Questions filter</h2>
            <ul className="space-y-2">
                {['All', 'Unused Questions', 'Used Questions', 'Correct Questions', 'Incorrect Questions'].map((text, index) => (
                    <li key={index} className="flex items-center">
                        <input type="checkbox" className="form-checkbox text-blue-500" defaultChecked />
                        <span className="ml-2 text-blue-900">{text}</span>
                    </li>
                ))}
                <li className="mt-4">
                    <label className="flex items-center text-gray-400">
                        <input type="checkbox" className="form-checkbox text-gray-400" disabled />
                        <span className="ml-2">Generate questions you have wrongly answered</span>
                    </label>
                </li>
            </ul>
        </div>
    );
};

export default QuestionsFilter;
