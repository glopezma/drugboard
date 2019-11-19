import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ERxService } from '../../shared/controllers/erx.service';
import { Drug } from '../../shared/models/drug.model';
import { DrugStatusEnumService } from '../../shared/controllers/drug-status-enum.service';

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

  constructor(private erxService: ERxService, public drugEnum: DrugStatusEnumService) {
    this.allDrugs = this.erxService.drugs;
    this.erxService.drugsChangedEvent.subscribe(res => {
      this.allDrugs = res;
    });
    this.drugStatusEnum = drugEnum.drugStatusEnum;
  }

  ngOnInit() {
  }

  onSelected(drug: Drug) {
    console.log(drug);
    this.drugWasSelected.emit(drug);
  }

  check() {
    this.erxService.isAvailable().subscribe(res => {
      console.log(res);
    });
  }

  renewalResponse(drug: Drug, approved: boolean) {
    console.log('renewal response');
    this.erxService.rxRenewalResponse(drug, approved).subscribe(res => {
      console.log(res);
    });
  }

  changeResponse(drug: Drug, approved: boolean) {
    console.log('change response');
    this.erxService.rxChangeResponse(drug, approved).subscribe(res => {
      console.log(res);
    });
  }
}
