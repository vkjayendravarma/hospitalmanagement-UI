import { Component, OnInit, Input } from '@angular/core';
import {FormBuilder,  FormGroup,  Validators, FormControl} from '@angular/forms';
import { FrontdeskService } from '../../services/frontdesk.service';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { DeletePatientComponent } from '../delete-patient/delete-patient.component';
import { Router } from '@angular/router';




@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss'],
})


export class NewComponent implements OnInit {
  @Input() patientId: string
  selected;
  newPatient: FormGroup;
  loading
  dateOfJoining = null

  post: any = '';

  constructor(private formBuilder: FormBuilder, private frontDeskSerivice:FrontdeskService, private patientDialog: MatDialog, private router: Router) {}



  ngOnInit(): void {
    this.loading = true
    this.createForm();
  }
  createForm() {
    let ssnid = null
    let name = null
    let age = null
    let dateOfJoining = new Date()
    let roomType = null
    let address = null
    let city = null
    let state = null
    
    if (this.patientId) {
      console.log(this.patientId);
      this.frontDeskSerivice.patientInfo(this.patientId).subscribe(res => {
        if(res.success){
          let data = res.res
          console.log(data);
          
          ssnid = data.ssnid
          name = data.name
          age = data.age
          dateOfJoining = data.dateOfJoining
          roomType = data.roomType
          address = data.address
          city = data.city
          state = data.state
        }
        this.genForm(ssnid, name, age, dateOfJoining, roomType, address, city, state)
        
      })
      
    }  
    else{
      this.genForm(ssnid, name, age, dateOfJoining, roomType, address, city, state)
    }
    
  }

  genForm(ssnid, name, age, dateOfJoining, roomType, address, city, state){    
    this.newPatient = this.formBuilder.group({
      'ssnid': [ssnid, [Validators.required]],
      'name': [name, Validators.required],
      'age': [age, [Validators.required]],
      'dateOfJoining': new FormControl( new Date(dateOfJoining)),
      'roomType': [roomType, [Validators.required]],
      'address': [address, [Validators.required]],
      'city': [city, [Validators.required]],
      'state': [state, [Validators.required]],
    });
    this.loading = false

  }
  createdPatient(message){
    const dialogConfig = new MatDialogConfig()
    console.log(name);
    
    dialogConfig.data = message
    this.patientDialog.open(DeletePatientComponent, dialogConfig)
  }
  onSubmit(post) {    
    if(this.patientId){      
      this.frontDeskSerivice.updatePatient(this.patientId, post).subscribe(res => {
        console.log(res);
        this.createdPatient(`Patient Updated`)
        this.router.navigateByUrl('user/frontdesk/dashboard')         
      })
      return
    }    
    this.frontDeskSerivice.newPatient(post).subscribe((res)=>{
      if(res.success){
        console.log(res.res);
        this.newPatient.reset()        
        this.createdPatient(`New patient created with id ${res.res.patientId} `)    
      }else{
        console.log("else" + res.res);
        this.createdPatient(` ${res.message} `)  
      }
    })
  }
}