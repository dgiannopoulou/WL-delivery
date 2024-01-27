import { Component, inject } from '@angular/core';
import { CategoriesService } from '../services/categories.service';
import { CommonModule } from '@angular/common';
import {RouterLink} from "@angular/router";
import {FamousStoresComponent} from "../famous-stores/famous-stores.component";
import {StoresComponent} from "../stores/stores.component";

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
 categories: any;

  service = inject(CategoriesService);

  ngOnInit(): void {
    this.getCategoriesData()
  }

  getCategoriesData() {
    this.service.getCategories().subscribe(
      {
        next: response => this.categories = response
      }
    )
  }


}
