import { Component } from '@angular/core';
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

  public cartProducts: any;

  constructor(public cart:CartService){}

  ngOnInit(): void {
    this.cartProducts = this.cart.getCartProducts()
  }
  
}
