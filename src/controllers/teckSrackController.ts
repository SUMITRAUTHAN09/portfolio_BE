import { Request, Response } from "express";
import TechStack from "../models/TechStack";

export const getTeckStack =async (req:Request, res:Response)=>{
  const techStacks =await TechStack.find().sort({order:1});
  res.json(techStacks);
};

export const createTeckStack=async (req:Request, res:Response)=>{
  const techStack =await TechStack.create(req.body);
  res.json(techStack);
};

export const updateTechStack =async (req:Request, res:Response)=>{
  const techStack =await TechStack.findByIdAndUpdate(req.params.id, req.body, {new:true});
  res.json(techStack);
}

export const deleteTechStack =async (req:Request, res:Response)=>{
  const techStack =await TechStack.findByIdAndDelete(req.params.id);
  res.json(techStack);
};