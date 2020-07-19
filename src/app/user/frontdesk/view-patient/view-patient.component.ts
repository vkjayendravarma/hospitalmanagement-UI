import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'; 
import { FrontdeskService } from '../../services/frontdesk.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

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

  constructor(private dialogRef: MatDialogRef<ViewPatientComponent>, @Inject(MAT_DIALOG_DATA) public inputData: any, private frontdeskSer: FrontdeskService,private message: MatSnackBar,
  private router: Router) {
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
    },(err)=>{            
      if(err.status == 401){
        window.localStorage.clear()
        this.dialogRef.close();
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
  dischage(patientId){
    this.frontdeskSer.dischargePatient(patientId).subscribe(res => {
      this.dialogRef.close()
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
