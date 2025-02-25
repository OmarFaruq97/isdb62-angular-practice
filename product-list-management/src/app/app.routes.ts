import { Routes } from '@angular/router';
import { AddProductComponent } from './page/add-product/add-product.component';
import { ListProductComponent } from './page/list-product/list-product.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'add-product', component:AddProductComponent},
    { path: 'list-product', component:ListProductComponent}
];
