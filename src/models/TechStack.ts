import mongoose, { Document, Schema } from "mongoose";

export interface ITechStack extends Document{
  name :string;
  icon: string;
  category?:string;
  order:number;
}

const TechStackSchema =new Schema<ITechStack>({
  name:{type:String, required:true},
  icon:{type:String, required:true},
  category:{type:String},
  order:{type:Number, default:0},
},
{timestamps:true},
)

export default mongoose.model<ITechStack>("TechStack", TechStackSchema);