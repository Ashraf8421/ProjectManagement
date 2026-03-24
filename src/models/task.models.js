import mongoose, { Schema } from "mongoose";
import { AvailableTaskStatues, TaskStstusEnum } from "../utils/constants.js";

const taskSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: String,
    project: {
      type: Schema.Types.ObjectId,
      ref: "Project",
      required: true,
    },
    assignedTo: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    assignedBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    status:{
        type:String,
        enum:AvailableTaskStatues,
        default:TaskStstusEnum.TODO
    },
    attachments:{
        type:[{
            url:String,
            mimetype:String,
            size:Number
        }],
        defualt:[]
    }
  },
  { timestamps: true },
);

export const Tasks = mongoose.model("Task",taskSchema)