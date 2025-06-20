import mongoose from "mongoose"

const connectDB = async()=>{
    try {
        if(!process.env.MONGODB_CONNECTION_URL){
           throw new Error("MONGODB_URL is not defined in the environment variables.");
        }
        await mongoose.connect(process.env.MONGODB_CONNECTION_URL);
        console.log("connected to mongoDB");
    } catch (error) {
        console.error(error.message);
        throw error;
    }
}

export default connectDB;