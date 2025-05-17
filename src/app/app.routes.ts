import { Routes } from '@angular/router';


import { BeginComponent } from './pages/begin/begin.component';
import { C101Component } from './pages/c101/c101.component';
import { C120Component } from './pages/c120/c120.component';
import { C130Component } from './pages/c130/c130.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    { path: 'c130', component: C130Component },
    { path: 'c120', component: C120Component },
    { path: 'c101', component: C101Component },
    { path: '', component: BeginComponent }
];
