function InputField({title, className = ""}) {
    return <div className={`w-full flex flex-col items-start justify-center mx-3 mt-3 ${className}`}>
        <div id={`input-field-title`} className={`text-sm text-dark`}>{title}</div>
        <input type={`text`} placeholder={title}
               className={`w-full mt-2 p-2 rounded-8 border border-lightDark text-lightDark focus:border-dark outline-none`}/>
    </div>;
}

function SignupInputs() {
    return <div id={`input-fields-container`} className={`w-full flex flex-col justify-start items-center`}>
        <div id={`input-field`} className={`w-full flex flex-row items-start justify-start`}>
            <InputField title={`First Name`}/>
            <InputField title={`Last Name`}/>
        </div>
        <InputField title={`E-mail`} className={`!px-3`}/>
        <InputField title={`Password`} className={`!px-3`}/>
        <InputField title={`Password-confirm`} className={`!px-3`}/>
    </div>;
}

export default SignupInputs;