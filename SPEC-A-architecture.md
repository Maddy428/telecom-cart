##Goal 
Building thin Experience API that powers a telecom cart on top of a non-persistent
Salesforce cart.

Creating Http Layers
  - Using Express we going to write API's
  - adding the getCart, updating the cart and removing the cart
  - Implement a SalesforceCartClient test double with realistic behavior
  - No database. Use in-memory stores and pure functions wherever possible.


## Data Flow
1. Client sends HTTP request
2. API Layer calls CartService
3. CartService interacts with SalesforceCartClient and/or In-Memory Store
4. Response is returned

## Abstractions / Types
```ts
interface Cart {
  id: string;
  items: CartItem[];
  expiresAt: Date;
}

interface CartItem {
  id: string;
  name: string;
  quantity: number;
}

interface SalesforceCartClient {
  fetchCart(cartId: string): Promise<Cart | null>;
  updateCart(cart: Cart): Promise<void>;
  removeCart(cartId: string): Promise<void>;
}