import { Routes } from '@angular/router';
import { CountAppComponent } from './count-app/count-app.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path : '', component : HomeComponent},
    { path : 'count-app', component : CountAppComponent}
];
