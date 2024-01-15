import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  
  http = inject(HttpClient);

  url = '/assets/data/food_categories.json'
  

  getCategories(){
    return this.http.get(this.url);
  }
}
