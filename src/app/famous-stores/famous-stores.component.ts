import {Component, inject, Input} from '@angular/core';
import { StoresService } from '../services/stores.service';
import { CommonModule } from '@angular/common';
import {Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-famous-stores',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './famous-stores.component.html',
  styleUrl: './famous-stores.component.css'
})
export class FamousStoresComponent {

  @Input() category: any;
  @Input() rate: any;

  storesList: any;
  service = inject(StoresService);

  constructor() {}
  ngOnInit(): void {

    this.service.getFamousStores().subscribe(
      {
        next: (response: any) => {
          this.storesList = response
          if (this.category) {
            let stores = response.filter((current: any) => current.category == this.category)
            this.storesList = stores;
          }
          if (this.rate) {
            let stores = response.filter((current: any) => current.rate == this.rate)
            this.storesList = stores;
          }
        }
      }
    )
  }

}
