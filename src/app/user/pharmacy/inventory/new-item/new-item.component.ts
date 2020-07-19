import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { PharmacyService } from 'src/app/user/services/pharmacy.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.scss']
})
export class NewItemComponent implements OnInit {

  newForm: FormGroup


  constructor(private formCont: FormBuilder, private dialogRef: MatDialogRef<NewItemComponent>, private pharserv: PharmacyService,private message: MatSnackBar,
    private router: Router) { }

  ngOnInit(): void {
    this.newForm = this.formCont.group({
      'name': ['', [Validators.required]],
      'quantity': ['', [Validators.required]],
      'price': ['', [Validators.required]]
    }) 
  }

  close(){
    this.dialogRef.close()
  }
  submit(data){
    console.log(data);
 
    this.pharserv.newInventoryItem(data).subscribe((res)=>{
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
