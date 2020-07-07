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
    console.log(this.newPatient.get('dateOfJoining').value)
    this.loading = false

  }
  createdPatient(message){
    const dialogConfig = new MatDialogConfig()
    console.log(name);
    
    dialogConfig.data = message
    this.patientDialog.open(DeletePatientComponent, dialogConfig)
  }
  onSubmit(post) {
    console.log(post);
    let patient = new FormData()
    patient.append('ssnid',this.newPatient.get('ssnid').value)
    patient.append('name',this.newPatient.get('name').value)
    patient.append('age',this.newPatient.get('age').value)
    patient.append('dateOfJoining',this.newPatient.get('dateOfJoining').value)
    patient.append('roomType',this.newPatient.get('roomType').value)
    patient.append('address',this.newPatient.get('address').value)
    patient.append('city',this.newPatient.get('city').value)
    patient.append('state',this.newPatient.get('state').value)
    
    if(this.patientId){
      this.frontDeskSerivice.updatePatient(this.patientId, patient).subscribe(res => {
        console.log(res);
        this.createdPatient(`Patient Updated`)
        this.router.navigateByUrl('/user/frontdesk')
         
      })
      return
    }
    
    this.frontDeskSerivice.newPatient(patient).subscribe((res)=>{
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