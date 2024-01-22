import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { Error404Component } from './error404/error404.component';
import { StoreDetailsComponent } from './store-details/store-details.component';
import { StoresComponent } from './stores/stores.component';

export const routes: Routes = [
    {path: 'home', component:HomepageComponent},
    {path: 'stores', component:StoresComponent},
    {path: 'stores/:id', component:StoreDetailsComponent},
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: "**", component: Error404Component}

];
