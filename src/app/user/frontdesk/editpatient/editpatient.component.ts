import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-editpatient',
  templateUrl: './editpatient.component.html',
  styleUrls: ['./editpatient.component.scss']
})
export class EditpatientComponent implements OnInit {
  patientId

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.patientId = params.get('patientId');
      console.log(this.patientId);
      
    });
  }

}
