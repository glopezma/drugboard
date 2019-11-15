import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Drug } from '../drug.model';

@Component({
  selector: 'app-drug-details',
  templateUrl: './drug-details.component.html',
  styleUrls: ['./drug-details.component.css']
})
export class DrugDetailsComponent implements OnInit, OnChanges {
  @Input() selectedDrug: Drug;
  code: string = '';
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    console.log(this.selectedDrug);
    this.code = JSON.stringify(this.selectedDrug, null, 2);
  }
}
