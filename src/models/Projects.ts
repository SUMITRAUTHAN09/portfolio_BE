import mongoose, { Document, Schema } from "mongoose";

export interface IProject extends Document{
  title:string;
  description: string;
  image:string;
  techStack:string[];
  githubLink?:string;
  liveLink?:string;
  order:number;
}

const ProjectSchema=new Schema<IProject>(
  {
    title:{type:String, required:true},
    description:{type:String, required:true},
    image: {type:String, required:true},
    techStack:[{type:String}],
    githubLink:{type:String},
    liveLink:{type:String},
    order:{type:Number, default:0},
  },
  {timestamps:true}
);

export default mongoose.model<IProject>("Project",ProjectSchema);