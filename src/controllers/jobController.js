import mongoose from "mongoose";
import Job from "../models/jobModel.js";

export const createJob = async(req, res) => {
  const { jobTitle, company, location, jobType, salary, description } =
    req.body;
  if (
    !jobTitle ||
    !company ||
    !location ||
    !jobType ||
    !salary ||
    !description
  ) {
    return res
      .status(400)
      .json({ success: false, message: "All fields are required" });
  }
  try {
    const newJob = new Job({
      jobTitle,
      company,
      location,
      jobType,
      salary,
      description,
    });
    await newJob.save();
    res.status(201).json({success:true,message:"Job Added", newJob})
  } catch (error) {
    res.status(500).json({success:false,message:error.message});
  }
};

export const viewAllJob = async(req, res) => {
  try {
    const allJobs = await Job.find();
    res.status(200).json({success:true,jobs:allJobs})
  } catch (error) {
     res.status(500).json({success:false,message:error.message});
  }
};

export const viewJobById = async(req, res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
      return res.status(400).json({ success: false, message: "Invalid Job ID" });
    }
  try {
    const jobById = await Job.findById(id);
    if(!jobById){
        return res.status(404).json({ success: false, message: "Job not found" });
    }
    res.status(200).json({success:true,jobById})
  } catch (error) {
     res.status(500).json({success:false,message:error.message});
  }
};


