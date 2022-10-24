import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import Button from "../../components/Button";
import Colors from "../../components/Colors";
import { addColor } from "../../redux/action";

const ColorPage = () => {
    const dispatch = useDispatch()
    const [newColorId, setNewColorId] = useState(null)

    useEffect(() => {
        setNewColorId(null)
    }, [])

    const addColorItem = () => {
        const id = uuidv4()
        dispatch(addColor({id: id, color: "#fcba03"}))
        setNewColorId(id)
    }

    return (
        <div>
            <Colors newColorId={newColorId} />
            <Button onClick={addColorItem}>Добавить цвет</Button>
        </div>
    )
}

export default ColorPage