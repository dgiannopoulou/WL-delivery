import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {

  constructor() { }

  private http = inject(HttpClient)


  url = '/assets/data/user.json'

  
  registerUser(data: any) {
    const options = {
      headers: new HttpHeaders({
        'content-Type': 'application/json',
        'Accept': "application/json"
      })
    }
      return this.http.post(this.url, JSON.stringify(data), options)

  }

  loginUser(data: any) {
    const options = {
      headers: new HttpHeaders({
        'content-Type': 'application/json',
        'Accept': "application/json"
      })
    }
      return this.http.post(this.url, JSON.stringify(data), options)

  }
}
