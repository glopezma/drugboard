import { Injectable, EventEmitter } from '@angular/core';
import { Drug } from '../models/drug.model';
import { HttpClient } from '@angular/common/http';
import { DrugStatusEnumService } from './drug-status-enum.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ERxService {
  drugs: Drug[];
  host: string;
  url: string;
  enum: string[] = new DrugStatusEnumService().drugStatusEnum;
  drugsChangedEvent = new EventEmitter<Drug[]>();

  constructor(private http: HttpClient) {
    this.host = 'bolt-erx-dev.medonesystems.com';
    this.url = `https://${this.host}/api//v1/relay`;
  }

  getDrugs() {
    const url = `${this.url}/DrugBoard`;
    this.http.get<Drug[]>(url).subscribe(res => {
      this.drugs = res.sort((a, b) => new Date(b.LastModified).getTime() - new Date(a.LastModified).getTime());
      console.log(this.drugs);
      this.drugsChangedEvent.emit(this.drugs);
    });
  }

  isAvailable(): Observable<any> {
    return this.http.get<any>(`${this.url}/IsAvailable`);
  }

  rxRenewalResponse(drug: Drug, approved: boolean): Observable<any> {
    console.log('refill approved');
    return this.http.post<any>(`${this.url}/RxRenewalResponse`, drug);
  }

  rxChangeResponse(drug: Drug): Observable<any> {
    console.log('approved change');
    return this.http.post<any>(`${this.url}/RxChangeResponse`, drug);
  }

  cancelRxRequest(drug: Drug): Observable<any> {
    console.log('canceled rx');
    return this.http.post<any>(`${this.url}/CancelRxRequest`, drug);
  }
}

/*
refill: yes/no
cancelRX: (just send ID more or less)
ChangeResponse: yes/no
*/