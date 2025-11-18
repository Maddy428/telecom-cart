import express from 'express';
import type {Request,Response} from 'express';
import { SalesforceCartClient } from '../salesforceCartClient.ts';

import type {CartItem} from '../salesforceCartClient.ts'

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

cartRouter.post('/cart/:cartid/item',(req: Request, res:Response)=>{
    console.log("incoming request")
  const item: CartItem = req.body;
  const cart = client.addItem(req.params.cartId, item);
  if (!cart) {
    return res.status(404).json({ message: 'Cart not found or expired' });
  }
    
  res.json({ message: 'Item added', cart });
})

cartRouter.delete('/cart/:cartId/item/:itemId', (req: Request, res: Response) => {
  const cart = client.removeItem(req.params.cartId, req.params.itemId);
  if (!cart) return res.status(404).json({ message: 'Cart not found or expired' });
  res.json({ message: 'Item removed', cart });
});

export default cartRouter;