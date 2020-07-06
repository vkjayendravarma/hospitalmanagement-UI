import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { PharmacyService } from 'src/app/user/services/pharmacy.service';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.scss']
})
export class NewItemComponent implements OnInit {

  newForm: FormGroup


  constructor(private formCont: FormBuilder, private dialogRef: MatDialogRef<NewItemComponent>, private pharserv: PharmacyService) { }

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
    let item = new FormData
    item.append('name', data.name)
    item.append('quantity', data.quantity)
    item.append('price',data.price)
    this.pharserv.newInventoryItem(item).subscribe((res)=>{
      if(res){
        this.dialogRef.close()
      }
    })
    
  }
}
