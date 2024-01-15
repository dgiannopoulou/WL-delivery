import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { Error404Component } from './error404/error404.component';

export const routes: Routes = [

    {path: "", redirectTo: "home", pathMatch: "full"},
    {path: "home", component:HomepageComponent},
    {path: "**", component: Error404Component}

];
