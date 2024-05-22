import React from 'react';

const NumberItem = ({ number, isSelected, onClick }) => {
    return (
        <div
            onClick={() => onClick(number)}
            className={`flex items-center justify-center my-2 h-12 w-12 cursor-pointer rounded-xl border border-white font-semibold ${
                isSelected ? 'bg-numbersBlue text-white' : 'bg-blue-100 text-white'
            }`}
        >
            {number}
        </div>
    );
};

export default NumberItem;
