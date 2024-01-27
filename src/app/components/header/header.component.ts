import { Component } from '@angular/core';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { RegisterFormComponent } from '../register-form/register-form.component';
import { ProfileAvatarComponent } from '../profile-avatar/profile-avatar.component';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CartStatusComponent } from '../../cart-status/cart-status.component';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SearchBarComponent, RegisterFormComponent, ProfileAvatarComponent, CommonModule, RouterLink, CartStatusComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
