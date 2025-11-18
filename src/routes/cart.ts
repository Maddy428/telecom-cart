import express, { json } from 'express';
import type {Request,Response} from 'express';
const cartRouter = express.Router();

const CartService = {
    getCart: (userId: string) => {
        // mock data
        return { userId, items: [{ productId: 1, quantity: 2 }] };
    }
};

cartRouter.get('/cart',(req:Request,res:Response)=>{

    try{
        const {userId} = req.query;
        if(typeof userId !== 'string'){
            return res.status(400).json({message:"user Id must be string"})
        }
       const cart = CartService.getCart(userId)
        return res.json({message:"cart data",cart})
    }catch(err){
        return res.json({message:'Unable fetch the details ' + err.message})
    }

})

export default cartRouter;