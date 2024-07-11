function StepBar({stepNumber = 1, onStepClicked}) {
    const handleOnStepClicked = (step) => {
        if(onStepClicked){
            onStepClicked(step)
        }
    }
    return <div className={`w-full`}>
        <h1 className={`font-bold text-5xl text-ldarkBlue sm:text-sm`}>Please choose your Krok specifics</h1>
        <div
            className={`w-[90%] sm:w-full h-20 sm:h-16 border border-ldarkBlue rounded-2xl flex items-center justify-between px-20 sm:px-4 mt-10`}>
            <p style={{cursor:"pointer"}} onClick={() => {
                handleOnStepClicked('year')
            }} className={`${stepNumber === 1 ? "text-ldarkBlue" : "text-gray-300"} text-2xl sm:text-lg font-semibold`}>Year</p>
            <p style={{cursor:"pointer"}} onClick={() => {
                handleOnStepClicked('subject')
            }} className={`${stepNumber === 2 ? "text-ldarkBlue" : "text-gray-300"} text-2xl sm:text-lg font-semibold`}>Subject</p>
            <p style={{cursor:"pointer"}} onClick={() => {
                handleOnStepClicked('system')
            }} className={`${stepNumber === 3 ? "text-ldarkBlue" : "text-gray-300"} text-2xl sm:text-lg font-semibold`}>System</p>
            <p style={{cursor:"pointer"}} onClick={() => {
                handleOnStepClicked('topic')
            }} className={`${stepNumber === 4 ? "text-ldarkBlue" : "text-gray-300"} text-2xl sm:text-lg font-semibold`}>Topic</p>
        </div>
    </div>;
}

export default StepBar;