import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {


  http = inject(HttpClient)

  url = '/assets/data/my_orders/my_orders.json'
  urlDetails = '/assets/data/my_orders/my_orders_{id}.json'
  
  getOrders() {
    return this.http.get(this.url);
  }

  getOrderById(id: string) {
    return this.http.get( this.urlDetails.replace("{id}",id) );
  }

  // setOrderRating(id: string, rating: number) {
  //   return this.http.post(...)
  // }

    setOrderRating(rating:number){
      return of(rating)
    }

  constructor() { }
}
