import { Routes } from '@angular/router';
import { CreateUserComponent } from './create-user/create-user.component';
import { UserListComponent } from './user-list/user-list.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    { path: 'home', component: HomePageComponent},
    { path: 'create-user', component: CreateUserComponent},
    { path: 'user-list', component: UserListComponent},
    { path: '', component: HomePageComponent},
    { path: '**', component: NotFoundComponent}
];
