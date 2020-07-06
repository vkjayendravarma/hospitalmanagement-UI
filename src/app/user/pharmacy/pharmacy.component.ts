import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { RecordsComponent } from './records/records.component';
import { PharmacyService } from '../services/pharmacy.service';
import { MatSnackBar } from '@angular/material/snack-bar';

export interface invoiceItems{
  id: string,
  quantity: number
}

@Component({
  selector: 'app-pharmacy',
  templateUrl: './pharmacy.component.html',
  styleUrls: ['./pharmacy.component.scss'],
})


export class PharmacyComponent implements OnInit {
  invoiceItemForm: FormGroup
  options:any = []
  filteredOptions:any = []
  patID;
  patData;

  quantityMax

  invoiceItems = []
  displayItems = []
  inventory
  max 
  patientDataLoading
  invoiceLoading
  

  constructor(
    private patientDialog: MatDialog,
    private pharmaservice: PharmacyService,
    private formBuilder: FormBuilder,
    private message: MatSnackBar
  ) {}



  ngOnInit() {    
    this.invoiceItemForm = this.formBuilder.group({
      'name': [null, [Validators.required]],
      'quantity': [null, [Validators.min(1), Validators.required,(control: AbstractControl) => Validators.max(this.max)(control)]]
    })
    
  }

  patientInfo(patientId) {
    console.log(patientId);
    this.patientDataLoading = true
    
    this.pharmaservice.getPatientData(patientId).subscribe((res) => {
      this.patientDataLoading = false
      if(res.success){
        this.patData = res.res; 
        console.log(res);    
        this.getInventory()
      }else{
        this.message.open("Invalied Id", "Close", {
          duration: 2000,
        });
      }
      
    });
  }

  viewPatient() {
    if (this.patData) {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.data = {
        pharma: true,
        data: this.patData.pharmacy};
      this.patientDialog.open(RecordsComponent, dialogConfig);
    }
  }


  genInvoice(patientID){
    console.log(this.invoiceItems);  
    this.invoiceLoading = true 
    
    if(this.invoiceItems.length > 0){
      this.pharmaservice.newInvoice({ patienId: patientID, items: {date: Date,  items: this.invoiceItems } }).subscribe(res=>{
        this.invoiceLoading = false
        if(res.success){
          this.message.open("Invoice generated", "Close", {
            duration: 2000,
          });
          this.patData = null
          this.patID = ''
          this.invoiceItems = []
          this.displayItems = []
        }
      
        
      })
    }else {
      this.message.open("No items selected", "Close", {
        duration: 2000,
      });
    }
  }
  select(val){
    console.log(val);
    this.inventory.forEach(element => {
      if(element._id.$oid == val){
        let max = element.quantity
        this.max = parseInt(max)
        return
      }
    });    
  }
  checkAvail(){
    let val = this.invoiceItemForm.get('name').value
    console.log(val);
    this.inventory.forEach(element => {
      if(element.name == val){
        let max = element.quantity
        this.max = parseInt(max)
        return
      }
    });    
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
          this.displayItems.push({id: item.name, quantity: item.quantity,unitPrice: element.price, price: (item.quantity * element.price)})          
          this.invoiceItems.push({id: element._id.$oid, quantity: item.quantity})
        }
      });
      this.invoiceItemForm.reset()
    }
        
  }

  getInventory(){
    this.pharmaservice.getInventory().subscribe(res=>{
      this.options = []
      let items = res.res
      console.log(items);
      
      this.inventory = items
      items.forEach(element => {
        let a = {value:element._id.$oid, option: element.name}
        this.options.push(a)
      });
      this.filteredOptions = this.options

          
    })
  }
}
