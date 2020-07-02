import { Component, OnInit } from '@angular/core';
import {FormBuilder,  FormGroup,  Validators} from '@angular/forms';
import { FrontdeskService } from '../../services/frontdesk.service';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { DeletePatientComponent } from '../delete-patient/delete-patient.component';


@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss'],
})

export class NewComponent implements OnInit {
  selected;
  newPatient: FormGroup;
  titleAlert: string = 'This field is required';
  post: any = '';

  constructor(private formBuilder: FormBuilder, private frontDeskSerivice:FrontdeskService, private patientDialog: MatDialog) {}

  ngOnInit(): void {
    this.createForm();
  }
  createForm() {
    
    this.newPatient = this.formBuilder.group({
      'ssnid': [null, [Validators.required]],
      'name': [null, Validators.required],
      'age': [null, [Validators.required]],
      'dateOfJoining': [null, [Validators.required]],
      'roomType': ['', [Validators.required]],
      'address': [null, [Validators.required]],
      'city': [null, [Validators.required]],
      'state': [null, [Validators.required]],
    });
  }
  createdPatient(message){
    const dialogConfig = new MatDialogConfig()
    console.log(name);
    
    dialogConfig.data = message
    this.patientDialog.open(DeletePatientComponent, dialogConfig)
  }
  onSubmit(post) {
    console.log(post);
    this.frontDeskSerivice.newPatient(post).subscribe((res)=>{
      if(res.success){
        console.log(res.res);
        
        this.createdPatient(`New patient created with id ${res.res.patientId} `)    
      }else{
        console.log("else" + res.res);
        this.createdPatient(` ${res.message} `)  
      }
    })
  }
}
