import { Injectable, EventEmitter } from '@angular/core';
import { Drug } from './drug.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DrugsService {
  drugs: Drug[];
  drugsChangedEvent = new EventEmitter<Drug[]>();

  constructor(private http: HttpClient) {}

  getDrugs() {
    const url = `https://bolt-erx-dev.medonesystems.com/api//v1/relay/DrugBoard`;
    this.http.get<Drug[]>(url).subscribe(res => {
      this.drugs = res.sort((a, b) => new Date(b.LastModified).getTime() - new Date(a.LastModified).getTime());
      console.log(this.drugs);
      this.drugsChangedEvent.emit(this.drugs);
    });
  }
}
