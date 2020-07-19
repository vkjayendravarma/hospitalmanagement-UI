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
import { Brake404Component } from './brake404/brake404.component';
import { AdGuard } from '../guards/ad.guard';
import { FdGuard } from '../guards/fd.guard';
import { LdGuard } from '../guards/ld.guard';
import { PdGuard } from '../guards/pd.guard';

const routes: Routes=[  
  {
    path: 'frontdesk/dashboard',
    component: FrontdeskComponent,
    canActivate: [FdGuard]    
  },
  {
    path: 'frontdesk/new',
    component: NewComponent,
    canActivate: [FdGuard]
  },
  {
    path: 'frontdesk/edit/:patientId',
    component: EditpatientComponent,
    canActivate: [FdGuard]
  },
  {
    path: 'lab/dashboard',
    component: LabComponent,
    canActivate: [LdGuard]
  },{
    path: 'lab/inventory',
    component: LabInventoryComponent,
    canActivate: [LdGuard]
  },
  {
    path: 'pharmacy/dashboard',
    component: PharmacyComponent,
    canActivate: [PdGuard]
  },{
    path: 'pharmacy/inventory',
    component: InventoryComponent,
    canActivate: [PdGuard]
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AdGuard]
  },{
    path: 'pagenotfound',
    component: Brake404Component
  },
  {
    path: '**',
    redirectTo: 'pagenotfound',
    pathMatch: 'full'
  }
]
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class UserRoutingModule {}
