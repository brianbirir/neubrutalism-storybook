import React from "react";


const BASE_INPUT_CLASSES = 'px-2 py-3 rounded-xl border-2 border-slate-900 text-black text-lg focus:outline-none';

export const Input = ({placeholder="General text field", ...props}) => {
    return (
        <input placeholder={placeholder} className={`${BASE_INPUT_CLASSES}`} {...props}/>
    )
}
