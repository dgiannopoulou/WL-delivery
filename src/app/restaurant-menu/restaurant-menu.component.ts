import { Component, Input} from '@angular/core';
import { AddRemoveButtonsComponent } from '../add-remove-buttons/add-remove-buttons.component';

@Component({
  selector: 'app-restaurant-menu',
  standalone: true,
  imports: [AddRemoveButtonsComponent],
  templateUrl: './restaurant-menu.component.html',
  styleUrl: './restaurant-menu.component.css'
})
export class RestaurantMenuComponent {
  @Input() product: any;
}
