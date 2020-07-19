import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LabService } from '../services/lab.service';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { RecordsComponent } from '../pharmacy/records/records.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lab',
  templateUrl: './lab.component.html',
  styleUrls: ['./lab.component.scss']
})
export class LabComponent implements OnInit {

  invoiceItemForm: FormGroup
  options:any = []
  filteredOptions:any = []
  invoiceItems = []
  displayItems = []

  inventory
  patientId
  patientData = null
  max

  patientDataLoading
  invoiceLoading

  constructor(private labservice: LabService, private patientDialog: MatDialog, private formBuilder: FormBuilder,private message: MatSnackBar,
    private router: Router

    ){}


  ngOnInit() {    
    this.invoiceItemForm = this.formBuilder.group({
      'name': [null, [Validators.required]],
    })
  }



  getPatientData(patientId){
    this.patientDataLoading = true
    this.getInventory()
    this.labservice.getPatientData(patientId).subscribe(res => {
      this.patientDataLoading = false
      if(res.success){
        this.patientData = res.res
        return
      }
      this.message.open("Invalied Id", "Close", {
        duration: 2000,
      });
      this.patientData = null      
    },(err)=>{    
      this.patientDataLoading = false        
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

  viewPatient() {
    if (this.patientData) {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.data = {
        pharma: false,
        data: this.patientData.diagnostics}
      this.patientDialog.open(RecordsComponent, dialogConfig);
    }
  }

  genInvoice(patientID){
    if(this.invoiceItems.length > 0){
      this.invoiceLoading = true
      this.labservice.newInvoice(patientID, this.invoiceItems).subscribe(res=>{
        this.invoiceLoading = false
        this.message.open("invoice generated", "Close", {
          duration: 2000,
        });
        this.patientData = null
        this.invoiceItems = []
        this.displayItems = []
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
    }else {
      this.message.open("No items", "Close", {
        duration: 2000,
      });
    }
  }


  filterOptions(){
    let keyWord = this.invoiceItemForm.get('name').value
    console.log(keyWord);    
    this.filteredOptions = this.options
    if(keyWord){
      this.filteredOptions = this.options.filter(element => {
        let search = element.option        
        search = (search.toString()).toUpperCase()
        keyWord = (keyWord.toString()).toUpperCase()
        if(search.indexOf(keyWord) !== -1){
          return element
        }
      })
    }

  }
  addItem(item){
    if(this.invoiceItemForm.valid){
      console.log(item);      
      this.inventory.forEach(element => {
        if(element.name == item.name){
          this.displayItems.push({name: item.name, unitPrice: element.price})          
          this.invoiceItems.push(element._id.$oid)
        }
      });
      this.invoiceItemForm.reset()
    }
        
  }

  getInventory(){
    this.labservice.getInventory().subscribe(res=>{
      this.options = []
      let items = res.res
      console.log(items);      
      this.inventory = items
      items.forEach(element => {
        let a = {value:element._id.$oid, option: element.name}
        this.options.push(a)
      });
      this.filteredOptions = this.options

          
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
