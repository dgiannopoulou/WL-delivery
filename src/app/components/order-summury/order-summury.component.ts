import { Component, Input, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-summury',
  standalone: true,
  imports: [],
  templateUrl: './order-summury.component.html',
  styleUrl: './order-summury.component.css'
})
export class OrderSummuryComponent {
  @Input() order:any;
  router: Router = inject(Router);


  selectOrder(order:any){
    console.log(order);
    this.router.navigate(["account/orders", order.id]);
  }
}
