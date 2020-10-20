import { Product, Shipping } from '@/types';

export default new class {
  private items: Product[] = [];

  addToCart(product: Product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices(): Promise<Shipping[]> {
    return fetch('./assets/shipping.json').then(r => r.json());
  }
}
