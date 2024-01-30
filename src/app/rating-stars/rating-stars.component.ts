import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rating-stars',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rating-stars.component.html',
  styleUrl: './rating-stars.component.css'
})
export class RatingStarsComponent {
  @Input() data: any;
  JSON: any;

  counter(n: number): number[] {
    return Array.from({ length: n }, (_, index) => index);
  }

  fill(n: number): number { 
    const rating = this.data?.rate || 0;
    if (n <= rating - 0.5) {
      return 1; //shows full star
    }
    if (n <= rating) {
      return rating % 1 === 0 ? 1 : 2; //shows full star if whole else half
    }
    return 0; // empty star
  }
}
