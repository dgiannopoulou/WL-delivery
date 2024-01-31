import { Component, inject, Input } from '@angular/core';
import { StoresService } from '../services/stores.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from "@angular/router";
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
  router= inject(Router);

  service = inject(StoresService);


  ngOnInit(): void {
    const isHomepage = this.router.url === '/home'; //check if I am in homepage

    this.service.getStores().subscribe(
      {
        next: (response: any) => {
          this.storesList = response
          if (this.category) {
            let stores = response.filter((current: any) => current.category == this.category)
            this.storesList = isHomepage ? stores.slice(0, 6) : stores;
          } else {
            this.storesList = isHomepage ? response.slice(0, 6) : response;
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
