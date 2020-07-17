import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  
  admin = [
    {
      path: 'admin',
      name: 'New User'
    },{
      path: 'frontdesk/dashboard',
      name: 'Front Desk'
    },{
      path: 'pharmacy/dashboard',
      name: 'Pahrmacy'
    }, {
      path: 'pharmacy/inventory',
      name: 'Pharmacy Inventory'
    },{
      path: 'lab/dashboard',
      name: 'Lab'
    }, {
      path: 'lab/inventory',
      name: 'Lab Inventory'
    },
  ]
  frontDesk = [
    {
      path: 'frontdesk/dashboard',
      name: 'Dashbord'
    }
  ]
  pharmacy = [
    {
      path: 'pharmacy/dashboard',
      name: 'Dashbord'
    }, {
      path: 'pharmacy/inventory',
      name: 'Inventory'
    },
  ]
  lab = [
    {
      path: 'lab/dashboard',
      name: 'Dashbord'
    }, {
      path: 'lab/inventory',
      name: 'Inventory'
    },

  ]

  sidebarItem

  constructor(private router: Router) { }

  ngOnInit(): void {
    let token =  window.localStorage.getItem('token')
    let role = token.substring(token.length - 2);     
    if(role == "AD") this.sidebarItem = this.admin
    else if(role == "FD") this.sidebarItem = this.frontDesk
    else if (role == "PD") this.sidebarItem = this.pharmacy
    else this.sidebarItem = this.lab
  }
  logout(){
    window.localStorage.clear()
    setTimeout(() => {
      this.router.navigateByUrl("login")
    }, 300);
  }

}
