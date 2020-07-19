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
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InventoryComponent } from './pharmacy/inventory/inventory.component';
import { LabInventoryComponent } from './lab/lab-inventory/lab-inventory.component';
import { ViewPatientComponent } from './frontdesk/view-patient/view-patient.component';
import { DeletePatientComponent } from './frontdesk/delete-patient/delete-patient.component';
import { MatDialogModule } from '@angular/material/dialog';
import { NewItemComponent } from './pharmacy/inventory/new-item/new-item.component';
import { RecordsComponent } from './pharmacy/records/records.component';
import { HttpClientModule } from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon';
import { NewTestComponent } from './lab/lab-inventory/new-test/new-test.component';
import { MessageComponent } from './message/message.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { EditpatientComponent } from './frontdesk/editpatient/editpatient.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { Brake404Component } from './brake404/brake404.component';


@NgModule({
  declarations: [SidebarComponent, LayoutComponent, FrontdeskComponent, AdminComponent, PharmacyComponent, LabComponent, NewComponent, InventoryComponent, LabInventoryComponent, ViewPatientComponent, DeletePatientComponent, NewItemComponent, RecordsComponent, NewTestComponent, MessageComponent, EditpatientComponent, Brake404Component],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatButtonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatSelectModule,
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    HttpClientModule,
    MatIconModule,
    MatSnackBarModule,
    MatProgressSpinnerModule
  ],
  entryComponents: [ViewPatientComponent, DeletePatientComponent, NewItemComponent, NewTestComponent]
})
export class UserModule { }
