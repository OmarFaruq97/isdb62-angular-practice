import { Routes } from '@angular/router';
import { CountAppComponent } from './count-app/count-app.component';

export const routes: Routes = [    
    {path: '', redirectTo: ''},
    { path: 'count-app', component : CountAppComponent}
];