import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { addTask, editTask } from '../Routes/taskApi';

export default function Addtask() {

  const navigate = useNavigate();
  const location = useLocation();

  const [token, setToken] = useState(location.state);
  let actionCheck =
    location.state && location.state[1] === "update"
      ? "Update Task"
      : "Add Task";
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    taskstatus:false
  });

  const onChangeTask = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((values) => ({ ...values, [name]: value }));
  };

  const actionCheckFun = () => {
    if (location.state && location.state[1] === "update") {
      document.getElementById("title").value = location.state[0].title;
      document.getElementById("description").value =
        location.state[0].description;
      setFormData({
        title: location.state[0].title,
        description: location.state[0].description,
        taskstatus:false
      });
    }
  };
  useEffect(() => {
    actionCheckFun();
  }, []);

  const onSubmitTask = async () => {
    try {
      if (actionCheck === "Add Task") {
        await addTask(formData);
        navigate("/tasks", { state: token });
      } else {
        console.log("edit ")
        let reqId = location.state[0]._id;
        const res = await editTask(reqId, formData);
        navigate("/tasks", { state: location.state[2] });
      }
    } catch (e) {
      console.log(e);
    }
  };

  const onTask = (e) => {
    e.preventDefault();
  };
  const dipsplayTask = () => {
    if (token === null) {
      navigate("/", { state: null });
    }
  };
  useEffect(() => {
    dipsplayTask();
  }, [token]);

  return (
    <div className='adding'> 
       
        <form onSubmit={onTask} className='content'>
        <h1>{actionCheck}</h1>
          <label>Enter Title :</label>
          <br />
          <input
            type="text"
            name="title"
            id="title"
            onChange={onChangeTask}
            className="mb-2 mt-2"
          />
          <br />
          <label>Enter Description :</label>
          <br />
          <input
            type="text"
            name="description"
            id="description"
            onChange={onChangeTask}
            className="mb-3"
          />
          <br />
          <button onClick={onSubmitTask} className="authBtn mb-5">
            {actionCheck}
          </button>
        </form>
    </div>
  )
}


