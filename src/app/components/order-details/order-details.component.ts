import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { OrdersService } from '../../services/orders.service';
import { AccountMenuComponent } from '../account-menu/account-menu.component';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-order-details',
  standalone: true,
  imports: [AccountMenuComponent,RouterLink,ReactiveFormsModule],
  templateUrl: './order-details.component.html',
  styleUrl: './order-details.component.css'
})
export class OrderDetailsComponent {

  activatedRoute = inject(ActivatedRoute);
  orderService: OrdersService = inject(OrdersService);
  selectedRating = 0;
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

  updateRating(rating:number){
      this.selectedRating = rating;
  }

  rateOrder(){
    this.orderService.setOrderRating(this.order.id,this.selectedRating)
            .subscribe({
              next: data => {
                console.log(data);
                this.order = data;
                console.log(this.order.rate)

              }
            })
  

    console.log(this.selectedRating)
  };

}
