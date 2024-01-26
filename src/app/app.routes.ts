import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { Error404Component } from './error404/error404.component';
import { StoreDetailsComponent } from './store-details/store-details.component';
import { StoresComponent } from './stores/stores.component';
import { AccountComponent } from './components/account/account.component';
import { AccountOrdersComponent } from './components/account-orders/account-orders.component';
import { AccountDetailsComponent } from './components/account-details/account-details.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';

export const routes: Routes = [
    {path: 'home', component:HomepageComponent},
    {path: 'stores', component:StoresComponent},
    {path: 'stores/:id', component:StoreDetailsComponent},
    {path: 'account', component:AccountComponent},
    {path: 'account/orders', component:AccountOrdersComponent},
    {path: 'account/orders/:id', component:OrderDetailsComponent},
    {path: 'account/adresses', component:AccountOrdersComponent},
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: "**", component: Error404Component}
];
