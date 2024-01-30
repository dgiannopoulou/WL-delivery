import { Component, inject } from '@angular/core';
import { CategoriesService } from '../services/categories.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  categories: any;
  selectedRating: number = 0;
  initialRating: number = 0;

  service = inject(CategoriesService);
  route= inject(ActivatedRoute);
  router = inject(Router);

  ngOnInit(): void {
    this.getCategoriesData();
    this.route.queryParams.subscribe(params => {
      this.selectedRating = +params['rate'] || 0;
      this.initialRating = this.selectedRating; //Setting the initial rating 
    })
  }

  getCategoriesData() {
    this.service.getCategories().subscribe(
      {
        next: response => this.categories = response
      }
    )
  }

  filterRating() {
    this.initialRating = this.selectedRating;
    this.router.navigate(['/home'], {queryParams: { rate: this.selectedRating} 
  });
  }

}
