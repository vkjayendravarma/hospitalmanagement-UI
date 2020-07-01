import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'; 

@Component({
  selector: 'app-view-patient',
  templateUrl: './view-patient.component.html',
  styleUrls: ['./view-patient.component.scss']
})
export class ViewPatientComponent implements OnInit {


  constructor(private dialogRef: MatDialogRef<ViewPatientComponent>, @Inject(MAT_DIALOG_DATA)private data: any) {
    
  }

  close() {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}
