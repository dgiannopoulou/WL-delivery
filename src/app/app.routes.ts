import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { Error404Component } from './error404/error404.component';
import { StoreDetailsComponent } from './store-details/store-details.component';
import { StoresComponent } from './stores/stores.component';
import { AccountComponent } from './components/account/account.component';
import { AccountOrdersComponent } from './components/account-orders/account-orders.component';
import { AccountDetailsComponent } from './components/account-details/account-details.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { CheckoutPageComponent } from './checkout-page/checkout-page.component';
import { CartComponent } from './cart/cart.component';

export const routes: Routes = [
    {path: 'home', component:HomepageComponent},
    {path: 'stores', component:StoresComponent},
    {path: 'stores/:id', component:StoreDetailsComponent},
    {path: 'cart', component:CartComponent},
    {path: 'checkout', component:CheckoutPageComponent},
    {path: 'account/profile', component:AccountComponent},
    {path: 'account/orders', component:AccountOrdersComponent},
    {path: 'account/orders/:id', component:OrderDetailsComponent},
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: "**", component: Error404Component}
];
