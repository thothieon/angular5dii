import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HeadComponent } from './components/Part/head/head.component';
import { BeginComponent } from './pages/begin/begin.component';
import { Bz01Component } from './pages/bz01/bz01.component';
import { C120Component } from './pages/c120/c120.component';
import { Cfd110Component } from './pages/cfd110/cfd110.component';
import { Dz01Component } from './pages/dz01/dz01.component';
import { Ec01Component } from './pages/ec01/ec01.component';
import { LinkidivingComponent } from './pages/linkidiving/linkidiving.component';

const routes: Routes = [
  { path: 'head', component: HeadComponent },
  { path: 'linkidiving', component: LinkidivingComponent },
  { path: 'c120', component: C120Component },
  { path: 'cfd110', component: Cfd110Component },
  { path: 'bz01', component: Bz01Component },
  { path: 'dz01', component: Dz01Component },
  { path: 'ec01', component: Ec01Component },
  { path: '', component: BeginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  //imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
