import { Component, OnInit } from '@angular/core';
import { ERxService } from '../shared/controllers/erx.service';
import { Drug } from '../shared/models/drug.model';

@Component({
  selector: 'app-drugboard',
  templateUrl: './drugboard.component.html',
  styleUrls: ['./drugboard.component.css'],
  providers: [ERxService]
})
export class DrugboardComponent {
  selectedDrug: Drug;
  collapsed = true;

  constructor(private erxService: ERxService) {
    this.erxService.drugsChangedEvent.subscribe(res => {
      if (!this.selectedDrug) {
        this.selectedDrug = res[0];
      }
    });
  }

  drugSelected(drug: Drug) {
    this.selectedDrug = drug;
  }

  reloadBoard() {
    this.erxService.getDrugs();
  }
}
