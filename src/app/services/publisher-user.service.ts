import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PublisherUserService {

  user:any;


  publishData(data: any) {
    this.user = data;
    console.log("publishData "+ JSON.stringify(this.user));

  }

  listenData() {
    console.log("listenData "+ JSON.stringify(this.user));
    return this.user;
  }
}
