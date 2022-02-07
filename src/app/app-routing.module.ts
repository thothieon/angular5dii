import { Cfd310Component } from './pages/cfd310/cfd310.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HeadComponent } from './components/Part/head/head.component';
import { B230Component } from './pages/b230/b230.component';
import { B310Component } from './pages/b310/b310.component';
import { B320Component } from './pages/b320/b320.component';
import { BeginComponent } from './pages/begin/begin.component';
import { Bz01Component } from './pages/bz01/bz01.component';
import { C100Component } from './pages/c100/c100.component';
import { C120Component } from './pages/c120/c120.component';
import { C130Component } from './pages/c130/c130.component';
import { C210Component } from './pages/c210/c210.component';
import { C310Component } from './pages/c310/c310.component';
import { Ccs001Component } from './pages/ccs001/ccs001.component';
import { Cfd110Component } from './pages/cfd110/cfd110.component';
import { Cfd120Component } from './pages/cfd120/cfd120.component';
import { Cfd130Component } from './pages/cfd130/cfd130.component';
import { Cfd210Component } from './pages/cfd210/cfd210.component';
import { Cfd220Component } from './pages/cfd220/cfd220.component';
import { Cfdc210Component } from './pages/cfdc210/cfdc210.component';
import { Cz01Component } from './pages/cz01/cz01.component';
import { D110Component } from './pages/d110/d110.component';
import { D111Component } from './pages/d111/d111.component';
import { D112Component } from './pages/d112/d112.component';
import { D120Component } from './pages/d120/d120.component';
import { D130Component } from './pages/d130/d130.component';
import { D140Component } from './pages/d140/d140.component';
import { Dz01Component } from './pages/dz01/dz01.component';
import { Ec01Component } from './pages/ec01/ec01.component';
import { LinkidivingComponent } from './pages/linkidiving/linkidiving.component';

const routes: Routes = [
  { path: 'head', component: HeadComponent },
  { path: 'linkidiving', component: LinkidivingComponent },
  { path: 'ec01', component: Ec01Component },
  { path: 'dz01', component: Dz01Component },
  { path: 'd140', component: D140Component },
  { path: 'd130', component: D130Component },
  { path: 'd120', component: D120Component },
  { path: 'd110', component: D110Component },
  { path: 'd111', component: D111Component },
  { path: 'd112', component: D112Component },
  { path: 'c210', component: C210Component },
  { path: 'c130', component: C130Component },
  { path: 'c120', component: C120Component },
  { path: 'c100', component: C100Component },
  { path: 'c310', component: C310Component },
  { path: 'cz01', component: Cz01Component },
  { path: 'ccs001', component: Ccs001Component },
  { path: 'ccs001/:id', component: Ccs001Component },
  { path: 'cfdc210', component: Cfdc210Component },
  { path: 'cfd110', component: Cfd110Component },
  { path: 'cfd120', component: Cfd120Component },
  { path: 'cfd130', component: Cfd130Component },
  { path: 'cfd210', component: Cfd210Component },
  { path: 'cfd220', component: Cfd220Component },
  { path: 'cfd310', component: Cfd310Component },
  { path: 'b310', component: B310Component },
  { path: 'b320', component: B320Component },
  { path: 'b230', component: B230Component },
  { path: 'bz01', component: Bz01Component },
  { path: '', component: BeginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  //imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
