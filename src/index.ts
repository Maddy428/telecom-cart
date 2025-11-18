import express from "express";
import type { Request,Response } from "express";


const app = express();

app.get('/',(req:Request,res:Response)=>{
    return res.send("App is working as expected!!!")
})


app.listen(3000,()=>{
    console.log("Listening port num 3000");
})