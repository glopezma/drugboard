import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DrugStatusEnumService {
  drugStatusEnum: string[];
  constructor() {
    this.drugStatusEnum = [
      'Pending',
      'Approved',
      'Denied',
      'Canceled',
      'Errored' // maybe add a filled enum?
    ];
  }
}
