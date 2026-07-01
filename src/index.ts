import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import connectDB from "./config/db";
import educationRoutes from "./routes/educationRoutes";
import messageRoutes from "./routes/messageRoutes";
import projectRoutes from "./routes/projectRoutes";
import serviceRoutes from "./routes/serviceRoutes";
import techStackRoutes from "./routes/techStackRoutes";

 dotenv.config()
 connectDB();

 const app=express()

 app.use(cors({origin: process.env.CLIENT_URL  }));
 app.use(express.json());
 app.get("/", (req, res) => {
  res.send("Portfolio API is running");
});
 
app.use("/api/projects", projectRoutes);
app.use("/api/services", serviceRoutes);
app.use("/api/education", educationRoutes);
app.use("/api/techstack", techStackRoutes);
app.use("/api/messages", messageRoutes);

 const PORT = process.env.PORT || 5000;
 app.listen(PORT, ()=> console.log(`server running on port ${PORT}`))