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
    this.drugStatusEnum = drugEnum.drugStatusEnum;
  }

  ngOnInit() {
    this.allDrugs = this.erxService.drugs;
    console.log(this.allDrugs);
    if (!this.allDrugs) {
      this.erxService.drugsChangedEvent.subscribe(res => {
        this.allDrugs = res;
        console.log(this.allDrugs);
      });
    }
  }

  approve(drug: Drug) {
    const approved = true;
    if (drug.MessageType === 'RxChange') this.changeResponse(drug, approved);
    else if (drug.MessageType === 'RxRenewal') this.renewalResponse(drug, approved);
  }

  cancel(drug: Drug) {
    const approved = false;
    if (drug.MessageType === 'NewRx' || drug.MessageType === 'newRxMessage') this.cancelRequest(drug);
    else if (drug.MessageType === 'RxChange') this.changeResponse(drug, approved);
    else if (drug.MessageType === 'RxRenewal') this.renewalResponse(drug, approved);
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
    this.erxService.rxRenewalResponse(drug, approved).subscribe(res => {
      console.log(res);
    });
  }

  changeResponse(drug: Drug, approved: boolean) {
    this.erxService.rxChangeResponse(drug, approved).subscribe(res => {
      console.log(res);
    });
  }

  cancelRequest(drug: Drug) {
    this.erxService.rxCancelRequest(drug).subscribe(res => {
      console.log(res);
    });
  }
}
