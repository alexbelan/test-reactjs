import axios from "axios";
import React, { useState } from "react";
import Button from "../../components/Button";
import InputFile from "../../components/InputFile";
import InputText from "../../components/InputText";
import Response from "../../components/Response";

const FormPage = () => {
    const [data,  setData] = useState({
        name: "",
        surname: "",
        middlename: "",
        file: null,
    })
    const [res, setRes] = useState("")
    

    const changeData = (name, text) => {
        setData(prev => {
            return {
                ...prev,
                [name]: text
            }
        })
    }

    const changeImage = (file) => {
        setData(prev => {
            return {
                ...prev,
                file: file
            }
        })
    }

    const submitForm = (e) => {
        e.preventDefault()
        const formData = new FormData()

        formData.set('action', 'send_data')
        formData.set('id', 1)
        formData.set('image', data.file)
        formData.set('contact[name]', data.name)
        formData.set('contact[surname]', data.surname)
        formData.set('contact[patronymic]', data.middlename)


        axios({
            method: "post",
            url: "https://test-job.pixli.app/send.php",
            data: formData,
            headers: { "Content-Type": "multipart/form-data" },
        })
        .then(res => {
            console.log(res)
            setRes( JSON.stringify(res, 2, "  "))
        })
    }

    return (
        <form onSubmit={submitForm}>
            <div style={{"marginBottom": "18px"}}>
                <InputText 
                    label={"Имя"}
                    name={"name"}
                    value={data.name}
                    onChangeText={changeData} />
            </div>
            <div style={{"marginBottom": "10px"}}>
                <InputText 
                    label={"Фамилия"}
                    name={"surname"}
                    value={data.surname}
                    onChangeText={changeData} />
            </div>
            <div style={{"marginBottom": "10px"}}>
                <InputText 
                    label={"Отчество"}
                    name={"middlename"}
                    value={data.middlename}
                    onChangeText={changeData} />
            </div>
            <div style={{"marginBottom": "48px"}}>
                <InputFile label={"Фото"} onChangeFile={changeImage} />
            </div>
            <div style={{"marginBottom": "23px"}}>
                <Button type="submit">Сохранить</Button>
            </div>
            <Response>
                {res}
            </Response>
        </form>
    )
}

export default FormPage