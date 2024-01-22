import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { StoreDetailsComponent } from './store-details/store-details.component';
import { StoresComponent } from './stores/stores.component';

export const routes: Routes = [

    {path: 'home', component:HomepageComponent},
    {path: 'stores', component:StoresComponent},
    {path: 'stores/:id', component:StoreDetailsComponent},
    {path: '', redirectTo: 'home', pathMatch: 'full'},

];
