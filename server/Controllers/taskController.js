import taskModel from "../Models/taskModel.js";


export const getTasks = async(req,res)=>{
      try{
        const Tasks = await taskModel.find();
        res.status(200).json({Tasks})
      }catch(err){
        console.log("error", err);
      }
}


// Adding a task
export const addTask = async(req,res)=>{
    try {
        const { title, description, status } = req.body;
        if (!title || !description || !taskstatus) return res.sendStatus(400).json({message: "Please fill the details"});
        await taskModel.create(req.body);
        console.log(taskModel)
        return res.status(200).json({ message: "Task is Added" });
      } catch (e) {
        console.log(e);
      }
}

// Edit a task
export const editTask = async(req,res)=>{
    try {
      if (!title || !description) return res.sendStatus(400).json({message: "Please fill the details"});
        await taskModel.findByIdAndUpdate(req.params.id, req.body);
        return res.status(200).json({ message: "Task is Updated" });
      } catch (e) {
        console.log(e);
      }
}


//Delete a task
export const deleteTask = async(req,res)=>{
    try {
        await taskModel.findByIdAndDelete(req.params.id);
        return res.status(200).json({ message: "Task is deleted" });
      } catch (e) {
        console.log(e);
      }
}
