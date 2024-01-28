import { Injectable, EventEmitter } from '@angular/core';
import { CartItem } from '../interfaces/CartItem';

@Injectable({
  providedIn: 'root'
})

export class CartService {

  public cartProducts: { [key: string]: CartItem } = {};  // A collection of items where each item is identified by a string key
  
  listChanged: EventEmitter<void> = new EventEmitter<void>();

  // Adds a new product and refreshes the localstorage.
  addProduct(product: any) {
    if (!this.cartProducts[product.id]) {
      this.cartProducts[product.id] = { product: product, quantity: 0 };
    }
    this.cartProducts[product.id].quantity++;
    localStorage.setItem('cartItems', JSON.stringify(this.cartProducts));
    this.listChanged.emit();
  }

  // Removes a product and refreshes the localstorage.
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

  cleanList():void {
    localStorage.removeItem('cartItems');
  }

  // This function checks if the product exists in our structure and returns the quantity.
  getQuantityOfProduct(product: any): number {
    const cartItem = this.cartProducts[product.id];
    return cartItem ? cartItem.quantity : 0;
  }

  // This function parses the Json we saved in localstorage and returns all the products as an object.
  getCartProducts(): CartItem[] {
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      this.cartProducts = JSON.parse(storedCartItems);
    }
    return Object.values(this.cartProducts);
  }

  // This function converts our object into an array and calculates iteratively the total cost of the products in our cart.
  calculateTotal(): number {
    return Object.values(this.cartProducts).reduce((total, cartItem) => {
      return total + cartItem.product.price * cartItem.quantity;
    }, 0);
  }
  
  constructor() { }
}
