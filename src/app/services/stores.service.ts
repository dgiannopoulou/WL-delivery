import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoresService {

  http = inject(HttpClient);

  url_store = '/assets/data/store.json'
  url_stores = '/assets/data/stores.json'
  url_famous = '/assets/data/most_famous_stores_in_general.json'

  getStore(){
    return this.http.get(this.url_store);
  } 

  getStores(){
    return this.http.get(this.url_stores);
  }

  getFamousStores(){
    let customHeaders = new HttpHeaders({
      'action': 'famous-stores-in-general',
    });
    return this.http.get(this.url_famous, {headers: customHeaders});
  }
   
  



}
