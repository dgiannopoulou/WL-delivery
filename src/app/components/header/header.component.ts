import { Component } from '@angular/core';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { RegisterFormComponent } from '../register-form/register-form.component';
import { ProfileComponent } from '../profile/profile.component';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, SearchBarComponent,RegisterFormComponent, ProfileComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
