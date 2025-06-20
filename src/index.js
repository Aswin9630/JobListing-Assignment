import express from "express";
import "dotenv/config"
import cors from "cors"
import cookieParser from "cookie-parser"
import connectDB from "./config/mongoDB";

const app =express();
const PORT = process.env.PORT || 3000;

app.use(express.json())
app.use(cors({
    origin:process.env.FRONTEND_URL,
    credentials:true
}))
app.use(cookieParser())

app.get("/test",(req,res)=>{
    res.json({message:"Testing success"});
})

const serverAndDBConnect = async()=>{
    try {
        await connectDB();
      app.listen(PORT,()=>console.log(`Server running on port:${PORT}`));
    } catch (error) {
        console.error(error);
        console.log(error.message)
    }
   
}

serverAndDBConnect();

app.use((error,req,res,next)=>{
    const statusCode = error.statusCode || 500;
    const message = error.message || "Internal Server Error"
    return res.status(statusCode).json({success:false, message})
})
