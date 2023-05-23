import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MemberSearchComponent } from './pages/member-search/member-search.component';
import { MemberNewComponent } from './pages/member-new/member-new.component';

const routes: Routes = [
  { path: 'new', component: MemberNewComponent },
  { path: '', component: MemberSearchComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberRoutingModule { }
