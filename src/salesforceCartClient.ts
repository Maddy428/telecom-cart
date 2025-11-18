export type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

export type Cart = {
  id: string;
  items: CartItem[];
  createdAt: number;
};

const carts: Record<string, Cart> = {};
const EXPIRY_MS = 5 * 60 * 1000; // 5 minutes

export class SalesforceCartClient {
  createCart(): Cart {
    const id = Math.random().toString(36).substring(2, 10);
    return (carts[id] = { id, items: [], createdAt: Date.now() });
  }

  getCart(cartId: string): Cart | null {
    const cart = carts[cartId];
    if (!cart || Date.now() - cart.createdAt > EXPIRY_MS) {
      delete carts[cartId];
      return null;
    }
    return cart;
  }

}


