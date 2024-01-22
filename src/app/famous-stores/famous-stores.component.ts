import { Component, inject } from '@angular/core';
import { StoresService } from '../services/stores.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-famous-stores',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './famous-stores.component.html',
  styleUrl: './famous-stores.component.css'
})
export class FamousStoresComponent {
  
  
  response: any;
  service = inject(StoresService);

  ngOnInit(): void {
    this.getFamousData()
  }
  getFamousData() {
    this.service.getFamousStores().subscribe(
      {
        next: (data: any) => this.response = data
      }
    )
  }


}