import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { RestaurantBannerComponent } from './restaurant-banner/restaurant-banner.component';
import { RestaurantMenuComponent } from './restaurant-menu/restaurant-menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HomepageComponent, RestaurantBannerComponent, RestaurantMenuComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WL-delivery';
}
