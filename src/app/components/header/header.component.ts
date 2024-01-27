import { Component, inject } from '@angular/core';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { RegisterFormComponent } from '../register-form/register-form.component';
import { CommonModule } from '@angular/common';
import { ProfileAvatarComponent } from '../profile-avatar/profile-avatar.component';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SearchBarComponent,RegisterFormComponent, ProfileAvatarComponent,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  activatedRoute = inject(ActivatedRoute);
  router =inject(Router);
  private location?: Location
  loggedIn?: boolean;
  userLog?:boolean;
  searchBar? :boolean;

  loggedUser(data: boolean) {
    this.loggedIn = data;
  }

  ngOnInit() {
    let url = window.location.href.toString();
    console.log(url);
    if (url.includes('account')) {
      this.searchBar = false;
    }else{
      this.searchBar = true;
    }
    
    this.userLog = localStorage.getItem('logIn') === 'true' ;
    
  }
}

