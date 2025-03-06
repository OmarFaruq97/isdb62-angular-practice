import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddMedComponent } from './add-med/add-med.component';
import { AllMedComponent } from './all-med/all-med.component';
import { BuyMedComponent } from './buy-med/buy-med.component';

export const routes: Routes = [
   
    {path: '', component: HomeComponent}
    ,{ path : 'add-med', component : AddMedComponent}
    ,{ path: 'all-med', component : AllMedComponent}
    ,{ path : 'buy-med', component : BuyMedComponent}
    
    
    
];
