import express  from "express";
import { addTask, getTasks, editTask, deleteTask } from "../Controllers/taskController.js";

const routerr =  express.Router();

routerr.get("/tasks", getTasks)
routerr.post("/addTask", addTask)
routerr.patch("/edit/:id", editTask)
routerr.delete("/delete/:id", deleteTask)

export default routerr