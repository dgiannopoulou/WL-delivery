import { Component, Input } from '@angular/core';
import { CartService } from '../services/cart.service';
import { CartItem } from '../interfaces/CartItem';

@Component({
  selector: 'app-add-remove-buttons',
  standalone: true,
  imports: [],
  templateUrl: './add-remove-buttons.component.html',
  styleUrl: './add-remove-buttons.component.css'
})
export class AddRemoveButtonsComponent {
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

  addProduct(product:any) {
    this.cart.addProduct(product);
  }

  removeProduct(product:any) {
    this.cart.removeProduct(product);
  }

  getTotal(): number {
    return this.cart.calculateTotal();
  }

  getTotalItems(product:any) {
    return this.cart.getQuantityOfProduct(product);
  }

  isEnabled(product:any) {
    return this.cart.getQuantityOfProduct(product) === 0;
  }

  @Input() product: any;
}
