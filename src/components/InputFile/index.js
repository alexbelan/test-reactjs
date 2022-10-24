import React, { useState, useRef, useEffect } from "react";
import ImageSvg from "../../svg/image.svg"

const InputFile = ({label, name, onChangeFile}) => {
    const inputFileRef = useRef(null)
    const [img, setImg] = useState({
        file: null,
        img: null
    })

    useEffect(() => {
        onChangeFile(img.file)
    }, [img.file])

    const getImage = () => {
        inputFileRef.current.click()
    }

    const changeImage = (e) => {
        let reader = new FileReader();
        let file = e.target.files[0];

        if(!(!!file)) {
            return
        }
    
        reader.onloadend = () => {
            setImg(prev => {
                return {
                    ...prev,
                    file: file,
                    img: reader.result
                }
            })
        }
        
        reader.readAsDataURL(file)
    }

    return (
        <div className="input">
            <label 
                className="input_label"
                for={name}>{label}</label>
            <input
                type={"file"}
                id={name}
                className="input_file" 
                name={name}
                onChange={changeImage}
                ref={inputFileRef}
                accept="image/png, image/gif, image/jpeg, image/jpg"
                />

            <div className="input_file-mask" onClick={getImage}>
                {!!img.img ? (
                    <img className="input_file_img" src={img.img} />
                ) : (
                    <img src={ImageSvg} />
                )}
                
            </div>
            
        </div>
    )
}

export default InputFile