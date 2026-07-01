import { Request, Response } from "express";
import Education from "../models/Education";

export const getEducation=async (req:Request, res:Response)=>{
  const educations =await Education.find().sort({order:1});
  res.json(educations);
}

export const createEducation =async(req:Request, res:Response)=>{
  const education=await Education.create(req.body);
  res.json(education);
};

export const updateEducation =async (req:Request, res:Response)=>{
  const education=await Education.findByIdAndUpdate(req.params.id, req.body, {new:true});
  res.json(education);
};

export const deleteEducation =async(req:Request, res:Response)=>{
  const education =await Education.findByIdAndDelete(req.params.id);
  res.json(education);
};