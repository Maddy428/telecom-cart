import request from 'supertest';
import express from 'express';
import cartRouter from '../routes/cart';

const app = express();

app.use(express.json());
app.use('/api',cartRouter);

describe('cart API  tests',()=>{
    let cartId:string;
    
    it('create cart',async ()=>{
        const res = await request(app).post('/api/cart').send();
        expect(res.status).toBe(200);
        cartId = res.body.cart.id;
    })
    it('add item', async ()=>{
        const res=await request(app).post(`/api/cart/${cartId}/item`)
        .send({id:'item1',name:'iphone',price:799,quantity:1});
        expect(res.status).toBe(200);
        expect(res.body.cart.items.length).toBe(1);
    })

    it('delete item', async()=>{
        const res = await request(app).delete(`/api/cart/${cartId}/item/item1`);
        expect(res.status).toBe(200);
        expect(res.body.cart.items.length).toBe(0);
    })
})