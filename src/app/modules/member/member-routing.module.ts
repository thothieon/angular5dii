import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MemberSearchComponent } from './pages/member-search/member-search.component';
import { MemberNewComponent } from './pages/member-new/member-new.component';
import { MemberInforComponent } from './pages/member-infor/member-infor.component';

const routes: Routes = [
  { path: 'infor/:id', component: MemberInforComponent },
  { path: 'infor', component: MemberInforComponent },
  { path: 'new', component: MemberNewComponent },
  { path: '', component: MemberSearchComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberRoutingModule { }
