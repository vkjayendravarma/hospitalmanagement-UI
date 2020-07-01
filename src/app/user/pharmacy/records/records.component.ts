import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'; 


@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.scss']
})
export class RecordsComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<RecordsComponent>, @Inject(MAT_DIALOG_DATA)private data: any) { }

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close();
  }


}
