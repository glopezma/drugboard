import { Component, OnInit } from '@angular/core';
import { DrugsService } from './drugs.service';
import { Drug } from './drug.model';

@Component({
  selector: 'app-drugboard',
  templateUrl: './drugboard.component.html',
  styleUrls: ['./drugboard.component.css'],
  providers: [DrugsService]
})
export class DrugboardComponent implements OnInit {
  selectedDrug: Drug;
  constructor(private drugsService: DrugsService) {
  }

  ngOnInit() {
    if (!this.drugsService.drugs) {
      this.drugsService.getDrugs();
    }
  }

  drugSelected(drug: Drug) {
    this.selectedDrug = drug;
  }
}
