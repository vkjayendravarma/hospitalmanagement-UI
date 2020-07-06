import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontdeskComponent } from './frontdesk/frontdesk.component';
import { LabComponent } from './lab/lab.component';
import { PharmacyComponent } from './pharmacy/pharmacy.component';
import { AdminComponent } from './admin/admin.component';
import { NewComponent } from './frontdesk/new/new.component';
import { InventoryComponent } from './pharmacy/inventory/inventory.component';
import { LabInventoryComponent } from './lab/lab-inventory/lab-inventory.component';
import { EditpatientComponent } from './frontdesk/editpatient/editpatient.component';

const routes: Routes=[
  {
    path: '',
    redirectTo: 'frontdesk',
    pathMatch: 'full'
  },
  {
    path: 'frontdesk',
    component: FrontdeskComponent,    
  },
  {
    path: 'frontdesk/new',
    component: NewComponent
  },
  {
    path: 'frontdesk/edit/:patientId',
    component: EditpatientComponent
  },
  {
    path: 'lab',
    component: LabComponent
  },{
    path: 'lab/inventory',
    component: LabInventoryComponent
  },
  {
    path: 'pharmacy',
    component: PharmacyComponent
  },{
    path: 'pharmacy/inventory',
    component: InventoryComponent
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
