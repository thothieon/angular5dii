import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MemberSearchComponent } from './pages/member-search/member-search.component';

const routes: Routes = [
  { path: '', component: MemberSearchComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberRoutingModule { }
