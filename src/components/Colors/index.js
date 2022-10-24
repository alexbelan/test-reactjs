import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Color from "./components/Color";

const Colors = ({newColorId}) => {
    const colors = useSelector(state => state)

    return (
        <div className="colors">
            {colors.map(item => {
                return newColorId === item.id ?
                    <Color key={item.id} value={item.color} id={item.id} newColorId={newColorId} />
                    :
                    <Color key={item.id} value={item.color} id={item.id} />
            })}
        </div>
    )
}

export default Colors