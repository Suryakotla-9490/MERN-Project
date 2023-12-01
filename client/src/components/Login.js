import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { loginApi } from '../Routes/userApi';

export default function Login() {

  const [formData, setFormData] = useState({ email: "", password: "" });
  const [validationMessage, setValidationMessage] = useState("");
  const navigate = useNavigate();

  const onFormSubmit = (e) => {
    e.preventDefault();
  };

  const onChangeFormData = (e) => {
    try {
      let name = e.target.name;
      let value = e.target.value;
      setFormData((ps) => ({ ...ps, [name]: value }));
    } catch (e) {
      console.log(e);
    }
  };
  //on submit user data into the Database
  const onSubmitFormData = async () => {
    try {
      const res = await loginApi(formData);
      let tokenCheck = res?.data?.token;
      if (tokenCheck) {
        navigate("/tasks", { state: tokenCheck });
      } else {
        navigate("/", { state: null });
      }
    } catch (e) {
      console.log(e);
      setValidationMessage(e.response.data.message);
    }
  };

  return (
    <div className='login-card'>
      <p style={{ color: "red" }}>{validationMessage}</p>
      <form onSubmit={onFormSubmit}>
        <label>Email :</label>
        <br />
        <input type="text" name="email" onChange={onChangeFormData} />
        <br />
        <label>Password :</label>
        <br />
        <input type="password" name="password" onChange={onChangeFormData} />
        <br />
        <button className="authBtn" onClick={onSubmitFormData}>
          Login
        </button>
      </form>
    </div>
  )
}
