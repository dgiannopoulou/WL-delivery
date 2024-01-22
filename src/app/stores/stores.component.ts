import { Component, inject } from '@angular/core';
import { StoresService } from '../services/stores.service';
import { CommonModule } from '@angular/common';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-stores',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './stores.component.html',
  styleUrl: './stores.component.css'
})
export class StoresComponent {

  response: any;
  response_famous: any;
  service = inject(StoresService);

  ngOnInit(): void {
    this.getStoresData()
  }

  getStoresData() {
    this.service.getStores().subscribe(
      {
        next: data => this.response = data
      }
    )
  }

}
