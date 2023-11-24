import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ActivityMainComponent } from './pages/activity-main/activity-main.component';

const routes: Routes = [
  { path: '', component: ActivityMainComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActivityRoutingModule { }
