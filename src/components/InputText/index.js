import React, { useEffect, useState } from "react";

const InputText = ({label, name, value, onChangeText}) => {
    const [text, setText] = useState(value)

    useEffect(() => {
        onChangeText(name, text)
    }, [text])

    const changeText = (e) => {
        setText(e.target.value)
    }

    return (
        <div className="input">
            <label 
                className="input_label"
                for={name}>{label}</label>
            <input
                id={name}
                className="input_text" 
                name={name}
                value={text}
                onChange={changeText}
                />
            
        </div>
    )
}

export default InputText