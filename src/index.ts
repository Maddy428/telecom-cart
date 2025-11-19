import express from "express";
import type { Request,Response } from "express";
import cartRouter from "./routes/cart";



const app = express();
app.use(express.json());

app.use('/api',cartRouter);



app.listen(3000,()=>{
    console.log("Listening port num 3000");
})