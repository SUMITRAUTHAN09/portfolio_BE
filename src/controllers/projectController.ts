import { Request, Response } from "express";
import Projects from "../models/Projects";

export const getProjects = async (req: Request, res: Response)=>{
  const projects=await Projects.find().sort({order:1});
  res.json(projects);
};

export const createProject =async (req:Request, res:Response)=>{
  const project = await Projects.create(req.body);
  res.status(201).json(project);
};

export const updateProject =async(req:Request, res:Response)=>{
  const project =await Projects.findByIdAndUpdate(req.params.id, req.body, {new:true});
  res.json(project);
}
export const deleteProject =async (req:Request, res:Response)=>{
  await Projects.findByIdAndDelete(req.params.id);
  res.json({message:"Deleted"});
};