import { Component, Input} from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-restaurant-menu',
  standalone: true,
  imports: [],
  templateUrl: './restaurant-menu.component.html',
  styleUrl: './restaurant-menu.component.css'
})
export class RestaurantMenuComponent {

  constructor(public cart:CartService){}

  addProduct(product:any) {
    this.cart.addProduct(product);
  }

  removeProduct(product:any) {
    this.cart.removeProduct(product);
  }

  getTotalItems(product:any) {
    return this.cart.getCountForProduct(product);
  }

  isEnabled(product:any) {
    return this.cart.getCountForProduct(product) === 0;
  }
  
  @Input() product: any;
}
