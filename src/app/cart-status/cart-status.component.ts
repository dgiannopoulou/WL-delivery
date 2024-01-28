import { Component, inject } from '@angular/core';
import { CartService } from '../services/cart.service';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-cart-status',
  standalone: true,
  imports: [CartComponent],
  templateUrl: './cart-status.component.html',
  styleUrl: './cart-status.component.css'
})
export class CartStatusComponent {

  cartProducts: number = 0;
  cart = inject(CartService);

  constructor(){}

  ngOnInit(): void {
    this.cartProducts = this.cart.getAllCartProducts();
    this.subscribeToProductChanges();
  }

  private subscribeToProductChanges(): void {
    this.cart.listChanged.subscribe(() => {
      this.cartProducts = this.cart.getAllCartProducts();
    });
  }
  
}
