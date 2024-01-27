import {Component, inject, Input} from '@angular/core';
import {StoresService} from "../services/stores.service";
import {CurrencyPipe} from "@angular/common";
import { AddtocartService } from '../services/addtocart.service';


@Component({
  selector: 'app-store-details',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './store-details.component.html',
  styleUrl: './store-details.component.css'
})
export class StoreDetailsComponent {

  @Input() id: any;

  storeDetails : any;

  service = inject(StoresService);

  ngOnInit(): void {
    this.service.getStores().subscribe(
      {
        next: response => {

          let stores= response.filter((current:any) => current.id == this.id)
          this.storeDetails = stores[0];

        }
      }
    )
  }

  constructor(public cart:AddtocartService){}

  add(a:any) {
    this.cart.addProduct(a);
  }

}
