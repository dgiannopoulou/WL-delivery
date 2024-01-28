import { Component } from '@angular/core';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { RegisterFormComponent } from '../register-form/register-form.component';
import { ProfileAvatarComponent } from '../profile-avatar/profile-avatar.component';
import { CommonModule } from '@angular/common';
import { CartStatusComponent } from '../../cart-status/cart-status.component';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SearchBarComponent, 
            RegisterFormComponent, 
            ProfileAvatarComponent,
            RouterLink, 
            CommonModule,  
            CartStatusComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  loggedIn?: boolean;
  userLog?:boolean;
  searchBar? :boolean;

  loggedUser(data: boolean) {
    this.loggedIn = data;
  }

  ngOnInit() {
    let url = window.location.href.toString();
    console.log(url);
    if (url.includes('account')|| url.includes('checkout')) {
      this.searchBar = false;
    }else{
      this.searchBar = true;
    }
    
    this.userLog = localStorage.getItem('logIn') === 'true' ;
    
  }
}

