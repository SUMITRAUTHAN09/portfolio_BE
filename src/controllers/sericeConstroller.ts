import { Request, Response } from "express";
import Service from "../models/Service";

export const getService =async (req:Request, res:Response)=>{
  const services=await Service.find().sort({order:1});
  res.json(services);
};

export const createService=async (req: Request, res:Response)=>{
  const service=await Service.create(req.body);
  res.json(service);
};

export const updateService =async (req:Request, res:Response)=>{
  const service =await Service.findByIdAndUpdate(req.params.id, req.body, {new: true});
  res.json(service);
};

export const deleteService =async (req:Request, res:Response)=>{
  const service =await Service.findByIdAndDelete(req.params.id);
  res.json(service);
};
