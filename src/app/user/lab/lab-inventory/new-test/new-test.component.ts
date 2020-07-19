import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { LabService } from 'src/app/user/services/lab.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-test',
  templateUrl: './new-test.component.html',
  styleUrls: ['./new-test.component.scss']
})
export class NewTestComponent implements OnInit {
  newForm: FormGroup


  constructor(private formCont: FormBuilder, private dialogRef: MatDialogRef<NewTestComponent>, private lab: LabService,private message: MatSnackBar,
    private router: Router) { }

  ngOnInit(): void {
    this.newForm = this.formCont.group({
      'name': ['', [Validators.required]],
      'price': ['', [Validators.required]]
    }) 
  }

  close(){
    this.dialogRef.close()
  }
  submit(data){
    console.log(data);
   
    this.lab.newTest(data).subscribe((res)=>{
      if(res){
        this.dialogRef.close()
      }
    },(err)=>{            
      if(err.status == 401){
        window.localStorage.clear()
        this.message.open("Session expired",'close',{
          duration: 2000
        })
        this.router.navigateByUrl('login')
        return
      }
      this.message.open(err.error.message,'close',{
        duration: 2000
      })    
            
    })
    
  }

}
