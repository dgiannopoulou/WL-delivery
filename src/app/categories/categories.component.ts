import { Component, inject } from '@angular/core';
import { CategoriesService } from '../services/categories.service';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
  response: any;
  response_famous: any;
  service = inject(CategoriesService);

  ngOnInit(): void {
    this.getCategoriesData()
  }

  getCategoriesData() {
    this.service.getCategories().subscribe(
      {
        next: data => this.response = data
      }
    )
  }

}
