import { Component } from '@angular/core';
import { AccountMenuComponent } from '../account-menu/account-menu.component';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [AccountMenuComponent],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent {

}
