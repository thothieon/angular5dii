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
import { C430Component } from './pages/c430/c430.component';
import { C510Component } from './pages/c510/c510.component';
import { C610Component } from './pages/c610/c610.component';
import { Ccr100Component } from './pages/ccr100/ccr100.component';
import { Coc100Component } from './pages/coc100/coc100.component';
import { J100Component } from './pages/j100/j100.component';


export const routes: Routes = [
    { path: 'j100', component: J100Component },
    { path: 'coc100', component: Coc100Component },
    { path: 'ccr100', component: Ccr100Component },
    { path: 'c610', component: C610Component },
    { path: 'c510', component: C510Component },
    { path: 'c430', component: C430Component },
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
