import { Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { AllProductComponent } from './all-product/all-product.component';

export const routes: Routes = [
    { path : "", component : HomeComponent}
    ,{ path : "about-us", component : AboutUsComponent}
    ,{ path : "product", component : AllProductComponent}
];
