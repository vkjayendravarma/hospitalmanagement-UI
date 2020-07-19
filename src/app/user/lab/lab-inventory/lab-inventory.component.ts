import { Component, OnInit } from '@angular/core';
import {  MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { LabService } from '../../services/lab.service';
import { NewTestComponent } from './new-test/new-test.component';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lab-inventory',
  templateUrl: './lab-inventory.component.html',
  styleUrls: ['./lab-inventory.component.scss']
})
export class LabInventoryComponent implements OnInit {

  data 
  filter
  loading


  constructor(private lab: LabService, private newTestModel: MatDialog,private message: MatSnackBar,
    private router: Router) { }

  ngOnInit(): void {
    this.getInventory()
  }

  getInventory(){
    this.loading = true
    this.lab.getInventory().subscribe(res => {
      this.loading = false
      this.data = res.res
      this.filter = this.data
    },(err)=>{  
      this.loading = false          
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

  searchInventory(keyWord){
    this.filter = this.data
    keyWord = keyWord.toLowerCase()
    if(keyWord){
      this.filter = this.data.filter(element => {
        let name = element.name
        name = name.toLowerCase()
        if(name.indexOf(keyWord) !== -1){
          return element
        }
      })
    }
  }

  newTest(){
    let modalRef = this.newTestModel.open(NewTestComponent)
    modalRef.afterClosed().subscribe((res) =>{
      this.getInventory()
      this.message.open("New test in inventory", "Close", {
        duration: 2000,
      });      
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
