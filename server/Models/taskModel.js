import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please add a Title"]
    },
    description: {
        type: String,
        default: "No Description",
        trim: true
    },
    taskstatus : {
        type:Boolean,
        default : false
    }
})

export default mongoose.model("task", taskSchema)