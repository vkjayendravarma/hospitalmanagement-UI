import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LayoutComponent } from './layout/layout.component';
import { UserRoutingModule } from './user-routing.module';
import { FrontdeskComponent } from './frontdesk/frontdesk.component';
import { AdminComponent } from './admin/admin.component';
import { PharmacyComponent } from './pharmacy/pharmacy.component';
import { LabComponent } from './lab/lab.component';



@NgModule({
  declarations: [SidebarComponent, LayoutComponent, FrontdeskComponent, AdminComponent, PharmacyComponent, LabComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
  ]
})
export class UserModule { }
