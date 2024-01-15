import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {

  constructor() { }

  http =inject(HttpClient)
  
  url = 'https://reqres.in/api/users'

  postUser(data: any) {

    const options = {
      headers: new HttpHeaders({
        'content-Type': 'application/json',
        'Accept': "application/json"
      })
    }

    return this.http.post(this.url, JSON.stringify(data), options)
    .pipe(
      retry(1),
      catchError(error => throwError(() => 'Something is wrong ${error.status}'))
    );
  }
}
