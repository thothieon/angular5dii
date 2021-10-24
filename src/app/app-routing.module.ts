import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HeadComponent } from './components/Part/head/head.component';
import { BeginComponent } from './pages/begin/begin.component';
import { C120Component } from './pages/c120/c120.component';
import { LinkidivingComponent } from './pages/linkidiving/linkidiving.component';

const routes: Routes = [
  { path: 'head', component: HeadComponent },
  { path: 'linkidiving', component: LinkidivingComponent },
  { path: 'c120', component: C120Component },
  { path: '', component: BeginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
