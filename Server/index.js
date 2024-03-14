import express from "express"
import mongoose from "mongoose"
import bodyParser from "body-parser"
import cors from "cors"
import dotenv from "dotenv";
import route from "./routes/userRoutes.js";

const app =express()
app.use(bodyParser.json())
app.use(cors())
dotenv.config();   

const PORT =process.env.PORT || 5000;
const URL = process.env.MONGO_URL

mongoose.connect(URL).then(()=>{
    console.log("DB connected Sucessfully")
    app.listen(PORT,()=>{
        console.log(`Server is running on port: ${PORT}`)
    })
}).catch(error=>console.log(error))

app.use("/api",route)
app.use("/getAll",route)
app.use("/getOne/:id",route)
app.use("/update/:id",route)
app.use("/delete/:id",route)

