import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ViewPatientComponent } from './view-patient/view-patient.component';
import { DeletePatientComponent } from './delete-patient/delete-patient.component';
import { FrontdeskService } from '../services/frontdesk.service';

@Component({
  selector: 'app-frontdesk',
  templateUrl: './frontdesk.component.html',
  styleUrls: ['./frontdesk.component.scss'],
})
export class FrontdeskComponent implements OnInit {
  patientsData;
  filterData;
  searchText;
  loading

  constructor(
    private patientDialog: MatDialog,
    private frontdeskService: FrontdeskService
  ) {}

  ngOnInit() {
    this.allPatients();
  }

  allPatients() {
    this.loading =true
    this.frontdeskService.allPatients().subscribe((res) => {
      console.log(res);
      this.loading=false
      this.patientsData = res.res;
      this.filterData = this.patientsData;
    });
  }

  filter(keyWord) {
    this.filterData = this.patientsData
    if (keyWord) {
      this.filterData = this.patientsData.filter((element) => {
        let source = element.patientId
        source = source.toString()
        keyWord = keyWord.toString()
        if (source.indexOf(keyWord) !== -1) {
          return element
        }
      });      
    }
    console.log(this.filterData);
  }

  viewPatient(patientId) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      id: patientId,
      view: true,
      user: 2
    };
    this.patientDialog.open(ViewPatientComponent, dialogConfig);
  }

  editPatient(patientId){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      id: patientId,
      edit: true,
      user: 2
    };
    this.patientDialog.open(ViewPatientComponent, dialogConfig);
  }
  dischargePatient(patientId){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      id: patientId,
      dischage: true,
      user: 2
    };
    let dialog =  this.patientDialog.open(ViewPatientComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => this.allPatients())
  }
  detelePatient(id, name) {
    let confirm = window.confirm(`Do you want to delete Patient 
    Name: ${name}
    id: ${id}`)
    const dialogConfig = new MatDialogConfig();
    console.log(name);

    if(confirm){
      this.frontdeskService.deletePatient(id).subscribe(res =>{
        if(res.success){
          dialogConfig.data = "Patient deleted"
          this.patientDialog.open(DeletePatientComponent, dialogConfig);
          this.allPatients()
        }
      })
    }

    
  }
}
