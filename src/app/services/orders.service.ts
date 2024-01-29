import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {


  http = inject(HttpClient)

  url = '/assets/data/my_orders/my_orders.json'
  urlDetails = '/assets/data/my_orders/my_orders_{id}.json'
  urlDetailsRated = '/assets/data/my_orders/my_orders_{id}_rated.json'

  getOrders() {
    return this.http.get(this.url);
  }

  getOrderById(id: string) {
    return this.http.get( this.urlDetails.replace("{id}",id) );
  }

  setOrderRating(id: string, rating: number) {
    const options = {
      headers: new HttpHeaders({
        'content-Type': 'application/json',
        'Accept': "application/json"
      })
    }
    return this.http.post(this.urlDetailsRated.replace("{id}", id),
      JSON.stringify([id, rating]), options)
  }

  constructor() { }
}
