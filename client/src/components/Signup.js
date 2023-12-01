import React, { useState } from 'react'
import { registerApi } from '../Routes/userApi';


export default function Signup() {

    const [validationMessage, setValidationMessage] = useState("");
    const [formData, setFormData] = useState({
        name: '', email: '', password: '', confirmPassword: ''
    })

    const onChangeFormData = (e) => {
        let value = e.target.value;
        let name = e.target.name;
        setFormData((ps) => ({ ...ps, [name]: value }))
    }

    const onSubmitFormData = async () => {
        try {
            const res = await registerApi(formData)
            setValidationMessage("success");
        } catch (err) {
            console.log('Error in onSubmitFormData', err)
            setValidationMessage(err.response.data.message);
        }
    }


    const onFormSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className='register-card'>
            {validationMessage === "success" ? (
                <p style={{ color: "green" }}>Registerd successfully please login !</p>
            ) : (
                <p style={{ color: "red" }}>{validationMessage}</p>
            )}
            <form onSubmit={onFormSubmit}>
                <label>User name :</label>
                <br />
                <input type="text" name="name" onChange={onChangeFormData} />
                <br />
                <label>Email :</label>
                <br />
                <input type="text" name="email" onChange={onChangeFormData} />
                <br />
                <label>Password :</label>
                <br />
                <input type="password" name="password" onChange={onChangeFormData} />
                <br />
                <label>ConfirmPassword :</label>
                <br />
                <input type="password" name="confirmPassword" onChange={onChangeFormData} />
                <br />
                <button className="authBtn" onClick={onSubmitFormData}> Register </button>
            </form>
        </div>
    )
}
