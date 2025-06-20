import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
  jobTitle: {
    type: String,
    trim:true,
    required: [true, "Job title is required"],
    minlength: [3, "minimum lenght should be 3 characters"],
    maxlength: [50, "length should not be exceed 50 characters"],
  },
  company: {
    type: String,
    trim:true,
    required: [true, "company name is required"],
    minlength: [3, "minimum lenght should be 3 characters"],
    maxlength: [50, "length should not be exceed 50 characters"],
  },
  jobType: {
    type: String,
    enum: ["FullTime", "PartTime", "Contract", "Internship"],
    required: [true, "Job type is required"],
  },

  salary: { type: String, required: [true, "salary is required"] },

  description: { type: String,maxlength:1000, required: [true, "description is required"] },
  
},{timestamps:true});

const Job = new mongoose.model("Job", jobSchema);
export default Job;
