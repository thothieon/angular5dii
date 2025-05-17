import { Routes } from '@angular/router';


import { BeginComponent } from './pages/begin/begin.component';
import { C101Component } from './pages/c101/c101.component';
import { C120Component } from './pages/c120/c120.component';
import { C130Component } from './pages/c130/c130.component';
import { C210Component } from './pages/c210/c210.component';
import { C310Component } from './pages/c310/c310.component';
import { C312Component } from './pages/c312/c312.component';
import { C313Component } from './pages/c313/c313.component';
import { C410Component } from './pages/c410/c410.component';
import { C420Component } from './pages/c420/c420.component';

export const routes: Routes = [
    { path: 'c420', component: C420Component },
    { path: 'c410', component: C410Component },
    { path: 'c313', component: C313Component },
    { path: 'c312', component: C312Component },
    { path: 'c310', component: C310Component },
    { path: 'c210', component: C210Component },
    { path: 'c130', component: C130Component },
    { path: 'c130', component: C130Component },
    { path: 'c120', component: C120Component },
    { path: 'c101', component: C101Component },
    { path: '', component: BeginComponent }
];
