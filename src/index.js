import express from "express";
import "dotenv/config"
import cors from "cors"
import cookieParser from "cookie-parser"

const app =express();
const PORT = process.env.PORT || 3000;

app.use(express.json())
app.use(cors())
app.use(cookieParser())

app.get("/test",(req,res)=>{
    res.json({message:"Testing success"});
})

app.listen(PORT,()=>console.log(`Server running on port:${PORT}`));