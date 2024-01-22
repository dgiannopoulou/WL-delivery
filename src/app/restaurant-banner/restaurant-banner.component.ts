import { Component, inject } from '@angular/core';
import { StoresService } from '../services/stores.service';

@Component({
  selector: 'app-restaurant-banner',
  standalone: true,
  imports: [],
  templateUrl: './restaurant-banner.component.html',
  styleUrl: './restaurant-banner.component.css'
})
export class RestaurantBannerComponent {
  data: any;
  response_famous: any;
  service = inject(StoresService);

  ngOnInit(): void {
    this.getStoreData()
  }

  getStoreData() {
    this.service.getStore().subscribe(
      {
        next: data => this.data = data
      }
    )
  }
}
