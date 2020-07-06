import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { LabService } from 'src/app/user/services/lab.service';

@Component({
  selector: 'app-new-test',
  templateUrl: './new-test.component.html',
  styleUrls: ['./new-test.component.scss']
})
export class NewTestComponent implements OnInit {
  newForm: FormGroup


  constructor(private formCont: FormBuilder, private dialogRef: MatDialogRef<NewTestComponent>, private lab: LabService) { }

  ngOnInit(): void {
    this.newForm = this.formCont.group({
      'name': ['', [Validators.required]],
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
    item.append('price',data.price)
    this.lab.newTest(item).subscribe((res)=>{
      if(res){
        this.dialogRef.close()
      }
    })
    
  }

}
