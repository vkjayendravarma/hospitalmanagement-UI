import { Component, OnInit } from '@angular/core';
import {  MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { LabService } from '../../services/lab.service';
import { NewTestComponent } from './new-test/new-test.component';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-lab-inventory',
  templateUrl: './lab-inventory.component.html',
  styleUrls: ['./lab-inventory.component.scss']
})
export class LabInventoryComponent implements OnInit {

  data 
  filter


  constructor(private lab: LabService, private newTestModel: MatDialog, private message:MatSnackBar) { }

  ngOnInit(): void {
    this.getInventory()
  }

  getInventory(){
    this.lab.getInventory().subscribe(res => {
      this.data = res.res
      this.filter = this.data
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
    modalRef.afterClosed().subscribe(() =>{
      this.getInventory()
      this.message.open("New test in inventory", "Close", {
        duration: 2000,
      });
      
    })
  }

}
