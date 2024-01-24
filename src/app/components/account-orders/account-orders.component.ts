import { Component } from '@angular/core';
import { AccountMenuComponent } from '../account-menu/account-menu.component';

@Component({
  selector: 'app-account-orders',
  standalone: true,
  imports: [AccountMenuComponent],
  templateUrl: './account-orders.component.html',
  styleUrl: './account-orders.component.css'
})
export class AccountOrdersComponent {

}
