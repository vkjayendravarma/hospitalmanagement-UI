import { Component, OnInit } from '@angular/core';
import {MatFormFieldControl} from '@angular/material/form-field';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ViewPatientComponent } from './view-patient/view-patient.component';
import { DeletePatientComponent } from './delete-patient/delete-patient.component';



@Component({
  selector: 'app-frontdesk',
  templateUrl: './frontdesk.component.html',
  styleUrls: ['./frontdesk.component.scss']
})
export class FrontdeskComponent implements OnInit {
 

  data = [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  ];

  constructor(private patientDialog: MatDialog){

  }


  ngOnInit() {
    
  }

  viewPatient(){
    const dialogConfig = new MatDialogConfig()
    dialogConfig.data = "some data";
    this.patientDialog.open(ViewPatientComponent, dialogConfig)
  } 
  deletePatient(id, name){
    const dialogConfig = new MatDialogConfig()
    console.log(name);
    
    dialogConfig.data = {
      'id': id,
      'name': name
    };
    this.patientDialog.open(DeletePatientComponent, dialogConfig)
  }

}

