import Express  from "express";
import cors from 'cors'
import connect from "./Database/conn.js";
import dotenv from "dotenv"
import router from "./Routes/userRoute.js";
import routerr from "./Routes/tasksRoute.js";



const app = Express()

// middlewares
dotenv.config()
app.use(cors())
app.use(Express.json())
app.use(router)
app.use(routerr)


// connecting database to server
connect().then(() => {
    try {
        app.listen(5000 , () => {
            console.log('listening to 5000')
        })
    } catch (err) {
        console.log('cannot connect with the server')
    }
}).catch((err) => {
    console.log('failed to connect with the database')
})

