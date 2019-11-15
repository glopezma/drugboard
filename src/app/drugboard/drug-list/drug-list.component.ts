import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DrugsService } from '../drugs.service';
import { Drug } from '../drug.model';

@Component({
  selector: 'app-drug-list',
  templateUrl: './drug-list.component.html',
  styleUrls: ['./drug-list.component.css']
})
export class DrugListComponent implements OnInit {
  allDrugs: Drug[];
  @Output() drugWasSelected = new EventEmitter<Drug>();

  constructor(private drugsService: DrugsService) {
    this.allDrugs = this.drugsService.drugs;
    this.drugsService.drugsChangedEvent.subscribe(res => {
      this.allDrugs = res;
    });
  }

  ngOnInit() {
  }

  onDrugSelected(drug: Drug) {
    this.drugWasSelected.emit(drug);
  }

}
