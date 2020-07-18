import { Component, OnInit } from '@angular/core';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { NewItemComponent } from './new-item/new-item.component';
import { PharmacyService } from '../../services/pharmacy.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {

  data 
  filterData
  sku: FormGroup
  send

  constructor(private inventoryDialog: MatDialog, private pharmaserv: PharmacyService, private formbuid: FormBuilder, private message: MatSnackBar) { }

  ngOnInit(): void {
    this.getInventory()
    this.sku = this.formbuid.group({
      'quantity': [null]
    })
  }
  newitem(){
    let dalog = this.inventoryDialog.open(NewItemComponent)
    dalog.afterClosed().subscribe(() => {
      this.getInventory()
      this.message.open("New item in inventory", "Close", {
        duration: 2000,
      });

    })
  }

  getInventory(){
    this.pharmaserv.getInventory().subscribe(res=>{
      this.data = res.res
      this.filterData = this.data
      console.log(this.data);      
    })
  }
  filterMed(keyWord){
    this.filterData = this.data
    if (keyWord) {
      this.filterData = this.data.filter((element) => {
        let source = element.name
        source = source.toString()
        keyWord = keyWord.toString()
        if (source.indexOf(keyWord) !== -1) {
          return element
        }
      });      
    }
    console.log(this.filterData);
  }

  addSku(qy, id){
    let qty = new FormData
    qty.append('quantity', this.sku.get('quantity').value)
    console.log(qty["quantity"]);   
    this.pharmaserv.addSku(id,qty).subscribe(res=>{
      console.log(res);      
      this.sku.reset()
      this.getInventory()
      this.message.open("New stock in inventory", "Close", {
        duration: 2000,
      });
    })
  }

}
