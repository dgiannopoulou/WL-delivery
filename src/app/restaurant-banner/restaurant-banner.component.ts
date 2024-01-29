import { Component, Input } from '@angular/core';
import { RatingStarsComponent } from '../rating-stars/rating-stars.component';

@Component({
  selector: 'app-restaurant-banner',
  standalone: true,
  imports: [RatingStarsComponent],
  templateUrl: './restaurant-banner.component.html',
  styleUrl: './restaurant-banner.component.css'
})
export class RestaurantBannerComponent {
  @Input() data: any;
}
