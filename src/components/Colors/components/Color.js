import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { removeColor, updateColor } from "../../../redux/action";
import CrossSvg from "../../../svg/cross.svg"

const Color = ({value, id, newColorId}) => {
    const dispatch = useDispatch()
    const inputColorRef = useRef(null)
    const inputCrossRef = useRef(null)
    const [color, setColor] = useState(value)

    useEffect(() => {
        if(!!newColorId && newColorId === id) {
            inputColorRef.current.click()
        }   
    }, [])

    useEffect(() => {
        dispatch(updateColor({id: id, color: color}))
    }, [color])

    const changeColor = (e) => {
        setColor(e.target.value)
    }

    const removeColorItem = () => {
        dispatch(removeColor(id))
    }

    const handleMouseEnter = () => {
        inputCrossRef.current.style.display = "block"
    }

    const handleMouseLeave = () => {
        inputCrossRef.current.style.display = "none"
    }

    return (
        <div>
            
            <input 
                id={id}
                ref={inputColorRef}
                className="color_input"
                type={"color"}
                value={color}
                onChange={changeColor}
                
                />

            <label 
                htmlFor={id}
                className="color_block"
                style={{"backgroundColor": color}}
                onMouseEnter={handleMouseEnter} 
                onMouseLeave={handleMouseLeave}
                >
                <div className="color_cross" ref={inputCrossRef} onClick={removeColorItem}>
                    <img src={CrossSvg} />
                </div>

            </label>
        </div>
    )
}

export default Color