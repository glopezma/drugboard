import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Drug } from '../../shared/models/drug.model';

@Component({
  selector: 'app-drug-details',
  templateUrl: './drug-details.component.html',
  styleUrls: ['./drug-details.component.css']
})
export class DrugDetailsComponent implements OnInit, OnChanges {
  @Input() selectedDrug: Drug;
  code = '';
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.code = JSON.stringify(this.selectedDrug, null, 2);
  }
}
