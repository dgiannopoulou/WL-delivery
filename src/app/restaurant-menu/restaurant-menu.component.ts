import { Component, inject } from '@angular/core';
import { StoresService } from '../services/stores.service';

@Component({
  selector: 'app-restaurant-menu',
  standalone: true,
  imports: [],
  templateUrl: './restaurant-menu.component.html',
  styleUrl: './restaurant-menu.component.css'
})
export class RestaurantMenuComponent {
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
