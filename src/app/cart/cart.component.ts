import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { CommonModule } from '@angular/common';
import { CartItem } from '../interfaces/CartItem';
import { AddRemoveButtonsComponent } from '../add-remove-buttons/add-remove-buttons.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, AddRemoveButtonsComponent, RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  cartProducts: CartItem[] = [];

  constructor(public cart: CartService) { }

  ngOnInit(): void {
    this.cartProducts = this.cart.getCartProducts();
    this.subscribeToProductChanges();
  }

  private subscribeToProductChanges(): void {
    this.cart.listChanged.subscribe(() => {
      this.cartProducts = this.cart.getCartProducts();
    });
  }

  getTotal(): number {
    return this.cart.calculateTotal();
  }

  //Remove a Product from Cart
  removeFromCart(product: any) {
    this.cart.removeAllProduct(product);
    this.cartProducts = this.cart.getCartProducts();
  }
  
}
