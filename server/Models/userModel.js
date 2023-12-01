import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is Required"]
    },
    email: {
        type: String,
        required: [true, "email is required"],
        unique: true
    },
    password: {
        type: String,
        trim: true,
        required: [true, "password is required"]
    },
    confirmPassword: {
        type: String,
        trim: true
    }
})

export default mongoose.model('user', userSchema)