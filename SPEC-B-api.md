## EndPoints of API's

POST : http://localhost:3000/api/cart
    -- This will cart id based on this we can get cart

Response : {
    "message": "Cart created",
    "cart": {
        "id": "d17ledgs",
        "items": [],
        "createdAt": 1763565297789
    }
}

GET: http://localhost:3000/api/cart/:cartId
    -- This will cartId and empty item

   Response: {
    "message": "cart data",
    "cart": {
        "id": "d17ledgs",
        "items": [],
        "createdAt": 1763565297789
    }
} 

POST: http://localhost:3000/api/cart/:cartId/item
    body:{
        "id": "item1",
        "name": "iPhone 15",
        "price": 799,
        "quantity": 1
    }

    --This will add the item into cart

Response : {
    "message": "Item added",
    "cart": {
        "id": "d17ledgs",
        "items": [
            {
                "id": "item1",
                "name": "iPhone 15",
                "price": 799,
                "quantity": 1
            }
        ],
        "createdAt": 1763565297789
    }
}

Delete: http://localhost:3000/cart/cartId/item/item1
        -- delete item from cart

Response: {
    "message": "Item removed",
    "cart": {
        "id": "d17ledgs",
        "items": [],
        "createdAt": 1763565297789
    }
}