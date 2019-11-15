import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DrugsService } from '../../drugs.service';
import { Drug } from '../../drug.model';

@Component({
  selector: 'app-drug-item',
  templateUrl: './drug-item.component.html',
  styleUrls: ['./drug-item.component.css']
})
export class DrugItemComponent implements OnInit {
  @Input() drug: Drug;
  @Output() drugSelected = new EventEmitter<Drug>();
  drugStatusEnum: string[];
  constructor(private drugsService: DrugsService) {
    this.drugStatusEnum = [
      'Pending',
      'Approved',
      'Denied',
      'Canceled',
      'Errored' // maybe add a filled enum?
    ];
  }

  ngOnInit() {
    this.drug.MessageType
  }

  onSelected() {
    this.drugSelected.emit(this.drug);
  }

}
