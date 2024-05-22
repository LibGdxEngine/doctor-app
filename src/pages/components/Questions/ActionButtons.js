import React from 'react';

const ActionButtons = ({onClick = null}) => {
    const handleClick = (isExam) => {
        if (onClick) {
            onClick(isExam);
        }
    }
    return (
        <div className="w-full flex space-x-4 mt-6">
            <button onClick={()=> handleClick(true)} className="w-full px-4 py-2 bg-blue-100 text-blue-900 rounded border border-blue-500">Exam Mood
            </button>
            <button onClick={()=> handleClick(false)} className="w-full px-4 py-2 bg-blue-500 text-white rounded">Study Mood</button>
        </div>
    );
};

export default ActionButtons;
