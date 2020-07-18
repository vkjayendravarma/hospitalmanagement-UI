import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'; 
import { FrontdeskService } from '../../services/frontdesk.service';

@Component({
  selector: 'app-view-patient',
  templateUrl: './view-patient.component.html',
  styleUrls: ['./view-patient.component.scss']
})
export class ViewPatientComponent implements OnInit {
 pat
 data
 filterData
 loading

  constructor(private dialogRef: MatDialogRef<ViewPatientComponent>, @Inject(MAT_DIALOG_DATA) public inputData: any, private frontdeskSer: FrontdeskService) {
    this.pat = this.inputData
  }

  close() {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.getData(this.inputData.id)
  }
  
  getData(patientID){
    this.loading = true
    this.frontdeskSer.patientInfo(patientID).subscribe((res) => {
      this.loading = false
      this.data = res.res
      console.log(res);
      
    })
  }
  dischage(patientId){
    this.frontdeskSer.dischargePatient(patientId).subscribe(res => {
      this.dialogRef.close()
    })
  }

}
