import { Component, inject } from '@angular/core';
import { CategoriesService } from '../services/categories.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

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
