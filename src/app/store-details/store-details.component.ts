import {Component, inject, Input} from '@angular/core';
import {StoresService} from "../services/stores.service";
import {CurrencyPipe} from "@angular/common";
import { CartService } from '../services/cart.service';
import { RestaurantBannerComponent } from '../restaurant-banner/restaurant-banner.component';
import { RestaurantMenuComponent } from '../restaurant-menu/restaurant-menu.component';
import { CartComponent } from '../cart/cart.component';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-store-details',
  standalone: true,
  imports: [CurrencyPipe, RestaurantBannerComponent, RestaurantMenuComponent, CartComponent, CommonModule],
  templateUrl: './store-details.component.html',
  styleUrl: './store-details.component.css'
})
export class StoreDetailsComponent {

  @Input() id: any;

  storeDetails : any;

  service = inject(StoresService);
  activatedRoute = inject(ActivatedRoute);


  ngOnInit(): void {
    this.activatedRoute.params
      .subscribe({
        next: _ => {
          this.service.getStores().subscribe(
            {
              next: response => {
                let stores = response.filter((current: any) => current.id == this.id)
                this.storeDetails = stores[0];
              }
            })
        }
      })
  }

  constructor(public cart:CartService){}

  add(a:any) {
    this.cart.addProduct(a);
  }

}
