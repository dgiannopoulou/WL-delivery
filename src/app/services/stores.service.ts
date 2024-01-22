import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StoresService {

  http = inject(HttpClient);

  url_store = '/assets/data/store.json'
  url_stores = '/assets/data/stores.json'
  url_famous = '/assets/data/most_famous_stores_in_general.json'

  getStores(): Observable<any[]>{
    return this.http.get<any>(this.url_stores);
  }

  getStore(){
    return this.http.get(this.url_store);
  } 

  getFamousStores(){
    let customHeaders = new HttpHeaders({
      'action': 'famous-stores-in-general',
    });
    return this.http.get(this.url_famous, {headers: customHeaders});
  }





}
