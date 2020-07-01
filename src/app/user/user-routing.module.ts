import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontdeskComponent } from './frontdesk/frontdesk.component';
import { LabComponent } from './lab/lab.component';
import { PharmacyComponent } from './pharmacy/pharmacy.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes=[
  {
    path: '',
    redirectTo: 'frontdesk',
    pathMatch: 'full'
  },
  {
    path: 'frontdesk',
    component: FrontdeskComponent
  },
  {
    path: 'lab',
    component: LabComponent
  },
  {
    path: 'pharmacy',
    component: PharmacyComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  }
]



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class UserRoutingModule { }
