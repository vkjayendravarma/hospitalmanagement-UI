import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup
  message
  loading
  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    window.localStorage.clear()
    this.loginForm = this.fb.group({
      'email': [null, Validators.required],
      'password': [null, Validators.required]
    })
  }

  login(data){
    this.loading= true
    let cred = new FormData()
    cred.append('email', data.email)
    cred.append('password', data.password)
    this.authService.login(cred).subscribe(res => {
      if(res.success){
        this.loading = false
        window.localStorage.setItem('token', res.token)
        this.message = "login successful"

        let token =  res.token
        let role = token.substring(token.length - 2); 
        if(role == "AD")  setTimeout(() => {this.router.navigateByUrl("user/admin")}, 300);
        else if(role == "FD")  setTimeout(() => {this.router.navigateByUrl("user/frontdesk/dashboard")}, 300);
        else if (role == "PD")  setTimeout(() => {this.router.navigateByUrl("user/pharmacy/dashboard")}, 300);
        else  setTimeout(() => {this.router.navigateByUrl("user/lab/dashboard")}, 300);   
      }
    }, (err) => {
      this.loading = false
      this.message = err.error.message
    })

  }

}
