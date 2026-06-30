import cors from "cors"
import dotenv from "dotenv"
import express from "express"
import connectDB from "./config/db"

 dotenv.config()
 connectDB();

 const app=express()

 app.use(cors({origin: process.env.CLIENT_URL  }));
 app.use(express.json());

 app.get("/",(req,res)=>{
  res.send("Portfolio API is calling")
 })

 const PORT = process.env.PORT || 5000;
 app.listen(PORT, ()=> console.log(`server running on port ${PORT}`))