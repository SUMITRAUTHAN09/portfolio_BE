import { Request, Response } from "express";
import Message from "../models/Message";

export const getMessage =async (req:Request, res:Response)=>{
  const messages=await Message.find().sort({createAt:-1});
  res.json(messages);
};

export const createMessage =async(req:Request, res:Response)=>{
  const message=await Message.create(req.body);
  res.status(201).json(message);
};

export const markRead =async(req:Request, res:Response)=>{
  const message=await Message.findByIdAndUpdate(req.params.id, {read:true}, {new:true});
  res.json(message);
};

export const deleteMessage =async (req:Request, res:Response)=>{
  await Message.findByIdAndDelete(req.params.id);
  res.json({message:"deleted"});
}