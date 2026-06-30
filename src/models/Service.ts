import mongoose, { Document, Schema } from "mongoose";

export interface IService extends Document{
title:string;
description:string;
icon?:string;
order:number;
};

const ServiceSchema =new Schema<IService>(
  {
    title:{type:String, required:true},
    description:{type:String, required:true},
    icon:{type:String},
    order:{type:Number, default:0},
  },
  {timestamps:true}
);

export default mongoose.model<IService>("Service", ServiceSchema)