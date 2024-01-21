import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private http = inject(HttpClient)

  urlBurger = '/assets/data/searchBurger.json'
  urlCoffee = '/assets/data/searchCoffee.json'
  urlEmpty = '/assets/data/searchEmpty.json'

  constructor() {}

  searchStore(data: String) {
    const options = {
      headers: new HttpHeaders({
        'content-Type': 'application/json',
        'Accept': "application/json"
      })
    }

    if (data == 'burger') {
      return this.http.post(this.urlBurger, JSON.stringify(data), options)
    }
    else if (data == 'coffee') {
      return this.http.post(this.urlCoffee, JSON.stringify(data), options)
    }
    else { 
      return this.http.post(this.urlEmpty, JSON.stringify(data), options) 
    }

  }

}
