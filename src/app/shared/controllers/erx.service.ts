import { Injectable, EventEmitter } from '@angular/core';
import { Drug } from '../models/drug.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ERxService {
  drugs: Drug[];
  drugsChangedEvent = new EventEmitter<Drug[]>();
  host: string;

  constructor(private http: HttpClient) {
    this.host = 'bolt-erx-dev.medonesystems.com';
  }

  getDrugs() {
    const url = `https://${this.host}/api//v1/relay/DrugBoard`;
    this.http.get<Drug[]>(url).subscribe(res => {
      this.drugs = res.sort((a, b) => new Date(b.LastModified).getTime() - new Date(a.LastModified).getTime());
      console.log(this.drugs);
      this.drugsChangedEvent.emit(this.drugs);
    });
  }

  check() {
    const url = `https://${this.host}/api//v1/relay/check`;
  }

  sendApprovalResponse(drug: Drug) {
    console.log(drug);
  }

  sendRefillRequest(drug: Drug) {
    console.log(drug);
  }
}
