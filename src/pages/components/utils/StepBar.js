function StepBar({stepNumber = 1, onStepClicked}) {
    const handleOnStepClicked = (step) => {
        if(onStepClicked){
            onStepClicked(step)
        }
    }
    return <>
        <h1 className={`font-bold text-5xl text-ldarkBlue`}>Please choose your Krok specifics</h1>
        <div
            className={`w-[90%] h-20 border border-ldarkBlue rounded-2xl flex items-center justify-between px-20 mt-10`}>
            <p style={{cursor:"pointer"}} onClick={() => {
                handleOnStepClicked('year')
            }} className={`${stepNumber === 1 ? "text-ldarkBlue" : "text-gray-300"} text-2xl font-semibold`}>Year</p>
            <p style={{cursor:"pointer"}} onClick={() => {
                handleOnStepClicked('subject')
            }} className={`${stepNumber === 2 ? "text-ldarkBlue" : "text-gray-300"} text-2xl font-semibold`}>Subject</p>
            <p style={{cursor:"pointer"}} onClick={() => {
                handleOnStepClicked('system')
            }} className={`${stepNumber === 3 ? "text-ldarkBlue" : "text-gray-300"} text-2xl font-semibold`}>System</p>
            <p style={{cursor:"pointer"}} onClick={() => {
                handleOnStepClicked('topic')
            }} className={`${stepNumber === 4 ? "text-ldarkBlue" : "text-gray-300"} text-2xl font-semibold`}>Topic</p>
        </div>
    </>;
}

export default StepBar;