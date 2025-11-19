import { SalesforceCartClient } from '../salesforceCartClient';

describe('SalesforceCartClient simple tests', () => {
  const client = new SalesforceCartClient();

  it('create cart', () => {
    const cart = client.createCart();
    expect(cart.id).toBeDefined();
  });

  it('add and remove item', () => {
    const cart = client.createCart();
    client.addItem(cart.id, { id: 'item1', name: 'iPhone', price: 799, quantity: 1 });
    expect(cart.items.length).toBe(1);

    client.removeItem(cart.id, 'item1');
    expect(cart.items.length).toBe(0);
  });
});
