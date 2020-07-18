import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AdminService } from '../services/admin.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  selected
  newUser: FormGroup

  constructor(private formBuilder: FormBuilder, private adminService: AdminService, private message: MatSnackBar) { }

  ngOnInit(): void {
    this.newUser = this.formBuilder.group({
      'name': [null, Validators.required],
      'email': [null, Validators.required],
      'password': [null, Validators.required],
      'dept': [null, Validators.required]
    })
  }

  createUser(user){
    // let data = new FormData()
    // data.append('name', user.name)
    // data.append('email', user.email)
    // data.append('password', user.password)
    // data.append('dept', user.dept)
    this.adminService.newUser(user).subscribe(res=>{
      console.log(res);
      this.newUser.reset()
      this.message.open(res.message,'close',{
        duration: 2000
      })
      
    })
  }

}
