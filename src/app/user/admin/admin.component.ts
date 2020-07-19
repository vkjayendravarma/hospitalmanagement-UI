import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AdminService } from '../services/admin.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  selected
  newUser: FormGroup
  loading

  constructor(private formBuilder: FormBuilder, private adminService: AdminService, private message: MatSnackBar, private router: Router) { }

  ngOnInit(): void {
    this.newUser = this.formBuilder.group({
      'name': [null, Validators.required],
      'email': [null, Validators.required],
      'password': [null, Validators.required],
      'dept': [null, Validators.required]
    })
  }

  createUser(user){
    this.loading = true

    this.adminService.newUser(user).subscribe(res=>{
      this.loading = false
      this.newUser.reset()
      this.message.open(res.message,'close',{
        duration: 2000
      })
      
    },(err)=>{   
      this.loading = false         
      if(err.status == 401){
        this.message.open("Session expired",'close',{
          duration: 2000
        })
        this.router.navigateByUrl('login')
        return
      }
      this.message.open(err.error.message,'close',{
        duration: 2000
      })    
            
    } )
  }

}
