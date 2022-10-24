import React from "react";

const Button = ({children, onClick=() => {}, type="button"}) => {
    return (
        <button 
            className="button_submit" 
            onClick={!!onClick && onClick}
            type={type}
            >
                {children}
        </button>
    )
}

export default Button