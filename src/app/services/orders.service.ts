import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {


  http = inject(HttpClient)
  url = '/assets/data/my_orders.json'
  urlDetails = '/assets/data/my_orders_{id}.json'


  getOrders() {
    return this.http.get(this.url);
  }

  getOrderById(id: string) {
    return this.http.get( this.urlDetails.replace("{id}",id) );
  }

  constructor() { }
}
