import { Component, inject, Input } from '@angular/core';
import { StoresService } from '../services/stores.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from "@angular/router";
import { resolve } from "@angular/compiler-cli";

@Component({
  selector: 'app-stores',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './stores.component.html',
  styleUrl: './stores.component.css'
})
export class StoresComponent {

  storesList: any;
  @Input() category: any;
  @Input() rate: any;

  service = inject(StoresService);


  ngOnInit(): void {

    this.service.getStores().subscribe(
      {
        next: (response: any) => {
          this.storesList = response
          if (this.category) {
            let stores = response.filter((current: any) => current.category == this.category)
            this.storesList = stores.slice(0, 6);
          } else {
            this.storesList = response.slice(0, 6);
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
