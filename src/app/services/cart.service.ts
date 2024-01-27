import { Injectable, EventEmitter  } from '@angular/core';
import { CartItem } from '../interfaces/CartItem';

@Injectable({
  providedIn: 'root'
})

export class CartService {

  public cartProducts: { [key: string]: CartItem } = {};
  
  listChanged: EventEmitter<void> = new EventEmitter<void>();

  addProduct(product: any) {
    if (!this.cartProducts[product.id]) {
      this.cartProducts[product.id] = { product: product, quantity: 0 };
    }
    this.cartProducts[product.id].quantity++;
    localStorage.setItem('cartItems', JSON.stringify(this.cartProducts));
    this.listChanged.emit();
  }

  removeProduct(product: any) {
    if (this.cartProducts[product.id]) {
      this.cartProducts[product.id].quantity--;
      if (this.cartProducts[product.id].quantity <= 0) {
        delete this.cartProducts[product.id];
      }
    }
    localStorage.setItem('cartItems', JSON.stringify(this.cartProducts));
    this.listChanged.emit(); 
  }

  getCountForProduct(product: any): number {
    const cartItem = this.cartProducts[product.id];
    return cartItem ? cartItem.quantity : 0;
  }

  getCartProducts(): CartItem[] {
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      this.cartProducts = JSON.parse(storedCartItems);
    }
    return Object.values(this.cartProducts);
  }

  calculateTotal(): number {
    return Object.values(this.cartProducts).reduce((total, cartItem) => {
      return total + cartItem.product.price * cartItem.quantity;
    }, 0);
  }
  
  constructor() { }
}
