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
    if((n-0.5)===this.data?.rate) return 2;
    else if (n < this.data?.rate) return 1;
    else return 0;
  }
}
