import { Component, Input, inject } from '@angular/core';

@Component({
  selector: 'app-restaurant-banner',
  standalone: true,
  imports: [],
  templateUrl: './restaurant-banner.component.html',
  styleUrl: './restaurant-banner.component.css'
})
export class RestaurantBannerComponent {
  @Input() data: any;
}
