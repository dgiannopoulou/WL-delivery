import { Component, OnInit, inject } from '@angular/core';
import { CartService } from '../services/cart.service';
import { CommonModule } from '@angular/common';
import { CartItem } from '../interfaces/CartItem';
import { AddRemoveButtonsComponent } from '../add-remove-buttons/add-remove-buttons.component';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, AddRemoveButtonsComponent, RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  cartProducts: CartItem[] = [];
  isCheckoutRoute: boolean = false;

  cart = inject(CartService);
  route = inject(ActivatedRoute);

  ngOnInit(): void {
    this.cartProducts = this.cart.getCartProducts();
    this.subscribeToProductChanges();
    this.route.url.subscribe(segments => {
      this.isCheckoutRoute = segments[segments.length - 1]?.path.endsWith('checkout');
    });
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
