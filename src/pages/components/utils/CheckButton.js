import {useState} from "react";
import unchecked from "../../../../public/tickcircle.svg";
import checked from "../../../../public/tickcircleunchecked.svg";
import Image from "next/image";

function CheckButton({text, onClick = null}) {
    const [isChecked, setIsChecked] = useState(false);

    function handleOnClick() {
        setIsChecked(!isChecked);
        if(onClick){
            onClick(isChecked);
        }
    }

    const state = isChecked ? unchecked : checked;
    return <div onClick={handleOnClick} style={{cursor: "pointer", borderRadius: "20.64px"}}
                className={`w-40 h-[50px] flex justify-between items-center px-5 py-1 mx-2 border border-0.5 border-ldarkBlue my-2 `}>
        <Image className={`me-1`} src={state} width={20} height={20} alt={``}/>

        <div className={`w-full text-center text-lg`}>
            {text}
        </div>
    </div>;
}

export default CheckButton;