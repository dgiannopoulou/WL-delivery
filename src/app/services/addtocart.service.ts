import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddtocartService {

  public cartProducts : any = []

  addProduct(product: any) {
    this.cartProducts.push(product);
  }

  getcartProducts() {
    return this.cartProducts;
  }


  constructor() { }
}
