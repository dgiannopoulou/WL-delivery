import { Component, inject } from '@angular/core';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { RegisterFormComponent } from '../register-form/register-form.component';
import { ProfileAvatarComponent } from '../profile-avatar/profile-avatar.component';
import { CommonModule } from '@angular/common';
import { CartStatusComponent } from '../../cart-status/cart-status.component';
import { ActivatedRoute, NavigationEnd, Router, RouterLink } from '@angular/router';


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

  router: Router = inject(Router)
  activatedRoute: ActivatedRoute = inject(ActivatedRoute)
  



  loggedIn?: boolean;
  userLog?: boolean;
  searchBar?: boolean;
  cartStatus?: boolean;

  loggedUser(data: boolean) {
    this.loggedIn = data;
  }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const root = this.router.routerState.snapshot.root;
        const routeUrl = root.url.map(url => url.path);
        console.log(root);
        console.log(this.router.routerState);

        let url = window.location.href.toString();
        //console.log(url);

        if (url.includes('account') || url.includes('checkout')) {
          this.searchBar = false;
        } else {
          this.searchBar = true;
        }

        if (url.includes('account') || url.includes('checkout') || url.includes('home')) {
          this.cartStatus = false;
        } else {
          this.cartStatus = true;
        }


        this.userLog = localStorage.getItem('logIn') === 'true';
      }
    });
  }
}

