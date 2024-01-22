import { Component } from '@angular/core';
import { CategoriesComponent } from '../categories/categories.component';
import { StoresComponent } from '../stores/stores.component';
import { FamousStoresComponent } from '../famous-stores/famous-stores.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CategoriesComponent, StoresComponent, FamousStoresComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

}
