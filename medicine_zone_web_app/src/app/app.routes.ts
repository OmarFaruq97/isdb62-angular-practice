import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddMedComponent } from './add-med/add-med.component';
import { AllMedComponent } from './all-med/all-med.component';
import { InvoiceComponent } from './invoice/invoice.component';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'add-med', component: AddMedComponent },
  { path: 'all-med', component: AllMedComponent },
  { path: 'invoice-med', component: InvoiceComponent },
];
