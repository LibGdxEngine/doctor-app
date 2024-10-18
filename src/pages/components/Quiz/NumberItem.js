import React from 'react';

const NumberItem = ({ number,answer, isSelected,isSkipped=false, onClick }) => {
    let answerState = 0;
    
    if (answer === null || answer === undefined){
        answerState = "border-orange-300";
    }else if (answer === true){
        answerState = "border-green-500";
    }else{
        answerState = "border-red-500";
    }
    if (isSkipped){
        answerState = "border-blue-500";
    }
    return (
      <div
        onClick={() => onClick(number)}
        className={`flex items-center justify-center my-2 h-12 w-12 cursor-pointer rounded-xl border ${answerState} font-semibold ${
          isSelected ? "bg-numbersBlue text-white" : "bg-blue-100 text-white"
        } ${isSkipped ? answerState : ""}`}
      >
        {number}
      </div>
    );
};

export default NumberItem;
