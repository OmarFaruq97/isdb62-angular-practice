import { Routes } from '@angular/router';
import { CountAppComponent } from './count-app/count-app.component';
import { HomeComponent } from './home/home.component';
import { BdFlagComponent } from './bd-flag/bd-flag.component';
import { NgsComponent } from './ngs/ngs.component';
import { HarryPotterComponent } from './harry-potter/harry-potter.component';
import { TeacherComponent } from './teacher/teacher.component';

export const routes: Routes = [
    { path : '', component : HomeComponent},
    { path : 'count-app', component : CountAppComponent},
    { path: 'bd-flag', component : BdFlagComponent},
    { path : 'ngs', component : NgsComponent},
    { path : 'harry-potter', component : HarryPotterComponent},
    { path : 'teacher', component : TeacherComponent},
    { path : '**', redirectTo: 'home'}
];
