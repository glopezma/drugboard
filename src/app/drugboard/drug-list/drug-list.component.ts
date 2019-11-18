import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ERxService } from '../../shared/controllers/erx.service';
import { Drug } from '../../shared/models/drug.model';
import { DrugStatusEnumService } from './drug-status-enum.service';

@Component({
  selector: 'app-drug-list',
  templateUrl: './drug-list.component.html',
  styleUrls: ['./drug-list.component.css'],
  providers: [DrugStatusEnumService]
})
export class DrugListComponent implements OnInit {
  allDrugs: Drug[];
  drugStatusEnum: string[];
  @Output() drugWasSelected = new EventEmitter<Drug>();

  constructor(private drugsService: ERxService, public drugEnum: DrugStatusEnumService) {
    this.allDrugs = this.drugsService.drugs;
    this.drugsService.drugsChangedEvent.subscribe(res => {
      this.allDrugs = res;
    });
    this.drugStatusEnum = drugEnum.drugStatusEnum;
  }

  ngOnInit() {
  }

  onSelected(drug: any) {
    console.log(drug);
    this.drugWasSelected.emit(drug);
  }

}
