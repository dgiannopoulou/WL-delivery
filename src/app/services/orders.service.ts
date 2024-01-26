import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {


  http = inject(HttpClient)
  url = '/assets/data/my_orders.json'

  getOrders() {
    return this.http.get(this.url);
  }

  getOrderById(id: number) {
    return this.http.get(this.url + "/" + id);
  }

  constructor() { }
}
