import express from 'express';
import type {Request,Response} from 'express';
import { SalesforceCartClient } from '../salesforceCartClient.ts';

const cartRouter = express.Router();

const client = new SalesforceCartClient();

cartRouter.post('/cart',(req:Request, res:Response)=>{
    const cart = client.createCart();
    res.json({message:'Cart created',cart});
})


cartRouter.get('/cart/:cartId',(req:Request,res:Response)=>{
    try{
        const {userId} = req.params;
        if(typeof userId !== 'string'){
            return res.status(400).json({message:"user Id must be string"})
        }
       const cart = client.getCart(userId)
        return res.json({message:"cart data",cart})
    }catch(err){
        return res.json({message:'Unable fetch the details ' + err.message})
    }

})

export default cartRouter;