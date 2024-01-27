import { Component } from '@angular/core';
import { AddtocartService } from '../services/addtocart.service';
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

  constructor(public cart:AddtocartService){}

  ngOnInit(): void {
    this.cartProducts = this.cart.getcartProducts()
  }
  
}
