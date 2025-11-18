## EndPoints of API's

POST : http://localhost:3000/api/cart
    -- This will cart id based on this we can get cart
GET: http://localhost:3000/api/cart/:cartId
    -- This will cartId and empty item

POST: http://localhost:3000/api/cart/:cartId/item
    body:{
        "id": "item1",
        "name": "iPhone 15",
        "price": 799,
        "quantity": 1
    }

    --This will add the item into cart

Delete: http://localhost:3000/cart/cartId/item/item1
        -- delete item from cart