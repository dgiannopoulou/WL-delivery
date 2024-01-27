import { Component } from '@angular/core';
import { AddtocartService } from '../services/addtocart.service';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  public cartProducts:any;

  constructor(public cart:AddtocartService){}

  ngOnInit(): void {
    this.cartProducts = this.cart.getcartProducts()
  }

  remove(id:any) {
    this.cartProducts = this.cartProducts.filter((product:any)=>{
      return product.id !== id
    })
  }
  
}
