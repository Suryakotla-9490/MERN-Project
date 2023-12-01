import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom';
import { deleteTask } from '../Routes/taskApi';


export default function Tasks() {

  const location = useLocation();
  const navigate = useNavigate();
  const [token, setToken] = useState(location?.state);
  const [tasksData, setTasksData] = useState([]);
  const [backgroundColor, setBackgroundColor] = useState("white")


  const getAllTasks = async () => {
    try {
      if (token === null) {
        navigate("/", { state: null });
      } else {
        const res = await axios.get("https://task-management-lbzn.onrender.com/tasks", {
          headers: {
            "X-Token": token,
          },
        });
        console.log(res.data.Tasks)
        setTasksData(res.data.Tasks);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getAllTasks();
  }, [token]);
  const onCreateTask = () => {
    navigate("/addTask", { state: token });
  };
  const onDeleteTask = async (id) => {
    try {
      const res = await deleteTask(id);
      if (res.data.message === "Task is deleted") {
        getAllTasks();
      }
    } catch (e) {
      console.log(e);
    }
  };

  const onEditTask = (val) => {
    console.log("hii")
    let action = "update";
    navigate("/addTask", { state: [val, action, token] });
  };

  return (
    <div>

      <nav class="navbar bg-body-secondary">
        <div class="container-fluid mx-5" >
          <a class="navbar-brand">TASK MANAGEMENT APP</a>
          <form class="d-flex" role="search">
            <button className="btn btn-outline-success" onClick={onCreateTask} type="submit">Create Task</button>
            <button className="btn btn-outline-secondary" onClick={() => setToken(null)} type="submit">Logout</button>
          </form>
        </div>
      </nav>

      {
        tasksData?.map((val) => {
          return (
            <div className='main'>
              <div class="card"  key={val._id}>
                <div class="card-body" >
                  <h5 class="card-title"><b>{val.title}</b></h5>
                  <h6 class="card-subtitle mb-2 text-body-secondary">{val.description}</h6>
                  <button className="btn btn-success me-2" onClick={() => onEditTask(val)} >EDIT</button>
                  <button className="btn btn-danger ms-2" onClick={() => onDeleteTask(val?._id)} >DELETE</button>
                </div>
              </div>
            </div>
          )
        })
      }


    </div>
  )
}
// add a check box to the above code ?
