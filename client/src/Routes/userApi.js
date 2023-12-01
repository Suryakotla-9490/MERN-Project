import axios from "axios"

//connecting url to backend
let url = "https://task-management-lbzn.onrender.com";

// SignUp Api
export const registerApi = (formData) => {
    try {
        const res = axios.post(url + '/signUp', formData)
        return res;
    } catch (err) {
        console.log("Signup error", err);
    }
}

// Login Api
export const loginApi = (formData) => {
    try {
        const res = axios.post(url + '/login', formData)
        return res;
    } catch (err) {
        console.log('Login Error : ', err);
    }
}