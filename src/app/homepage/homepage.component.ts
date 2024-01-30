import {Component, inject, Input, OnInit} from '@angular/core';
import {CategoriesComponent} from '../categories/categories.component';
import {StoresComponent} from '../stores/stores.component';
import {FamousStoresComponent} from '../famous-stores/famous-stores.component';
import {SidebarComponent} from '../sidebar/sidebar.component';
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {CartService} from '../services/cart.service';
import { RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CategoriesComponent, StoresComponent, FamousStoresComponent, SidebarComponent, RouterLink, NgIf],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

  constructor(public cart: CartService) { }

  @Input() category: any;
  selectedRating: number =0;

  router = inject(Router)
  route = inject(ActivatedRoute);

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.location.reload();
      }
    });
    this.cart.cleanList(); // This removes the products from the cart when you visit homepage

    //use ActivatedRoute to get the query params
    this.route.queryParams.subscribe(params => {
      this.selectedRating = +params['rate'] || 0;
    });
  }

}
