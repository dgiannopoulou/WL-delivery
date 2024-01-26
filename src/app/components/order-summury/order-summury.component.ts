import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-order-summury',
  standalone: true,
  imports: [],
  templateUrl: './order-summury.component.html',
  styleUrl: './order-summury.component.css'
})
export class OrderSummuryComponent {
  @Input() order:any;
}
