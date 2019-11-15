import { Injectable, EventEmitter } from '@angular/core';
import { Drug } from './drug.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DrugsService {
  drugs: Drug[] = [
    new Drug('1111', 'Joe', '2222', 'Approved'),
    new Drug('4444', 'Joe', '5555', 'Pending'),
    new Drug('2222', 'Joe', '3333', 'Pending'),
    new Drug('3333', 'Joe', '4444', 'Failed'),
    new Drug('4444', 'Joe', '5555', 'Declined'),
    new Drug('4444', 'Joe', '5555', 'Error'),
    new Drug('4444', 'Joe', '5555', 'Pending'),
    new Drug('4444', 'Joe', '5555', 'Pending'),
  ];
  DrugsChangedEvent = new EventEmitter<Drug[]>();

  constructor(private http: HttpClient) { }

  getDrugs() {
    let url = ``;
    // this.http.get<DrugDTO[]>(``).subscribe(res => {

    // });
  }
}
