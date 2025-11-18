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
        console.log("data is coming")
        const cartId = req.params.cartId;
        if(!cartId){
            return res.status(404).json({
                message:'cart id id empty'
            });
        }
       const cart = client.getCart(cartId)
        return res.json({message:"cart data",cart})
    }catch(err){
        return res.json({message:'Unable fetch the details ' + err.message})
    }

})

export default cartRouter;