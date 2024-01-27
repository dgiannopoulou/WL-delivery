import { Component, inject } from '@angular/core';
import { AccountMenuComponent } from '../account-menu/account-menu.component';
import { OrdersService } from '../../services/orders.service';
import { OrderDetailsComponent } from '../order-details/order-details.component';
import { OrderSummuryComponent } from '../order-summury/order-summury.component';

@Component({
  selector: 'app-account-orders',
  standalone: true,
  imports: [AccountMenuComponent, AccountOrdersComponent, OrderSummuryComponent],
  templateUrl: './account-orders.component.html',
  styleUrl: './account-orders.component.css'
})
export class AccountOrdersComponent {

  OrdersService: OrdersService = inject(OrdersService);
  orderList: any;

  ngOnInit() {

    this.OrdersService.getOrders()
      .subscribe(
        {
          next: data => {
            this.orderList = data
            console.log(this.orderList)
          }
        }
      );
  }

}
