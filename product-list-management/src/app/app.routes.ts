import { Routes } from '@angular/router';
import { AddProductComponent } from './page/add-product/add-product.component';
import { ListProductComponent } from './page/list-product/list-product.component';

export const routes: Routes = [
    {path: 'add-product', component:AddProductComponent},
    {path: 'list-product', component:ListProductComponent}
];
