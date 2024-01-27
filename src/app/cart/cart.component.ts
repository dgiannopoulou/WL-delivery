import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { CartItem } from '../interfaces/CartItem';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterLink],
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

  // remove(id:any) {
  //   this.cartProducts = this.cartProducts.filter((product:any)=>{
  //     return product.id !== id
  //   })
  // }
  
}
