import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { AboutComponent } from './page/about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TabelArrayComponent } from './table/table-array/tabel-array.component';
import { ContactComponent } from './page/contact/contact.component';

export const routes: Routes = [
    // {path: 'navbar', component: NavbarComponent},
    {path: '',component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'home', component: HomeComponent},
    {path: 'contact', component: ContactComponent},
    // {path: 'table',component:TabelArrayComponent},
    {path: '**', redirectTo: ''}
];