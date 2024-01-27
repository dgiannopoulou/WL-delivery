import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { OrdersService } from '../../services/orders.service';
import { AccountMenuComponent } from '../account-menu/account-menu.component';

@Component({
  selector: 'app-order-details',
  standalone: true,
  imports: [AccountMenuComponent,RouterLink],
  templateUrl: './order-details.component.html',
  styleUrl: './order-details.component.css'
})
export class OrderDetailsComponent {

  activatedRoute = inject(ActivatedRoute);
  orderService: OrdersService = inject(OrdersService);
  order: any;


  ngOnInit() {
    this.activatedRoute.params
      .subscribe({
        next: (params: any) => {
          let id = params.id;
          console.log(params.id);
          this.orderService.getOrderById(id)
            .subscribe({
              next: data => {
                console.log(data);
                this.order = data;
              }
            })
        }
      })
  }

}
