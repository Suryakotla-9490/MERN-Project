import axios from 'axios'

//connecting url to backend
let url = "https://task-management-lbzn.onrender.com";

export const addTask = (formData) => {
    try {
        const res = axios.post(url + '/addTask', formData)
        return res
    } catch (err) {
        console.log('error')
    }

}

export const editTask = (id, formData) => {
    try {
        const res = axios.patch(url + `/edit/${id}`, formData)
        return res
    } catch (err) {
        console.log("Error")
    }
}

export const deleteTask = (id)=>{
    try{
       const res = axios.delete(url + `/delete/${id}`)
       return res;
    }catch(err){

    }
}


