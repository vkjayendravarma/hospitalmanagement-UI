import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-patient',
  templateUrl: './delete-patient.component.html',
  styleUrls: ['./delete-patient.component.scss'],
})
export class DeletePatientComponent implements OnInit {
 
  constructor(
    private dialogRef: MatDialogRef<DeletePatientComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    
  }

  onNoClick(): void {
    
  }
}
