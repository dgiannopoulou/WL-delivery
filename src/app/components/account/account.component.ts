import { Component } from '@angular/core';
import { AccountMenuComponent } from '../account-menu/account-menu.component';
import { AccountDetailsComponent } from '../account-details/account-details.component';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [AccountMenuComponent,AccountDetailsComponent],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent {

}
