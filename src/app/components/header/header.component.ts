import { Component } from '@angular/core';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { RegisterFormComponent } from '../register-form/register-form.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SearchBarComponent,RegisterFormComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
