import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddMedComponent } from './add-med/add-med.component';
import { AllMedComponent } from './all-med/all-med.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { SalesHistoryComponent } from './sales-history/sales-history.component';
import { RegistrationComponent } from './registration/registration.component';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'add-med', component: AddMedComponent },
  { path: 'all-med', component: AllMedComponent },
  { path: 'invoice-med', component: InvoiceComponent },
  { path: 'sales-history', component: SalesHistoryComponent },
  { path: 'registration', component: RegistrationComponent}
];
