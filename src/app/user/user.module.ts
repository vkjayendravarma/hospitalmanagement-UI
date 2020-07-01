import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LayoutComponent } from './layout/layout.component';
import { UserRoutingModule } from './user-routing.module';
import { FrontdeskComponent } from './frontdesk/frontdesk.component';
import { AdminComponent } from './admin/admin.component';
import { PharmacyComponent } from './pharmacy/pharmacy.component';
import { LabComponent } from './lab/lab.component';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NewComponent } from './frontdesk/new/new.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';





@NgModule({
  declarations: [SidebarComponent, LayoutComponent, FrontdeskComponent, AdminComponent, PharmacyComponent, LabComponent, NewComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatButtonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatSelectModule
    
  ]
})
export class UserModule { }
