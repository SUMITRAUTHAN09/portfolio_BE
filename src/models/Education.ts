import mongoose, { Document, Schema } from "mongoose";

export interface IEducation extends Document {
  institution: string;
  degree: string;
  field: string;
  startYear: string;
  endYear: string;
  description: string;
  order: number;
}

const EducationSchema = new Schema<IEducation>(
  {
    institution: {type: String,required: true,},
    degree: {type: String,required: true,},
    field: {type: String,},
    startYear: {type: String,required: true,},
    endYear: {type: String,required: true,},
    description: {type: String,},
    order: {type: Number,default: 0,},
  },
  { timestamps: true },
);

export default mongoose.model<IEducation>("Education", EducationSchema);
