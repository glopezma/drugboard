import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Drug } from '../drug.model';

@Component({
  selector: 'app-drug-details',
  templateUrl: './drug-details.component.html',
  styleUrls: ['./drug-details.component.css']
})
export class DrugDetailsComponent implements OnInit, OnChanges {
  @Input() selectedDrug: Drug;
  // code: string = JSON.stringify({
  //   perscriber: 'sender',
  //   ID: 'Code 404 in description',
  //   relatedToID: ['eRx', 'sender'],
  //   Status: 'eRx ERROR'
  //   }, null, 4);
  code: string = '';
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    console.log(this.selectedDrug);
    this.code = `    {
      "perscriber": "${this.selectedDrug.perscriber}",
      "ID": "${this.selectedDrug.prescriptionID}",
      "relatedToID": "${this.selectedDrug.relatesToID}",
      "Status": "${this.selectedDrug.status}"
    }`;
  }

}
