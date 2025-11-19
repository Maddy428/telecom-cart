## PROMPTS.md


Write a thin Experience API in Node + TypeScript that powers a telecom cart on top of a non-persistent Salesforce cart context. 

Requirements:
- No real Salesforce calls; use an in-memory store with expiry for carts
- Include endpoints:
  - POST /api/cart → create cart
  - GET /api/cart/:cartId → get cart
  - POST /api/cart/:cartId/item → add item to cart
  - DELETE /api/cart/:cartId/item/:itemId → remove item from cart
- Use Express Router to organize routes
- Include TypeScript types for Cart and CartItem
- Use try/catch blocks to handle errors
- Write unit tests for critical paths (add, remove, get cart)
- Sample request/response payloads:
```json
{
  "id": "item1",
  "name": "iPhone 15",
  "price": 799,
  "quantity": 1
}