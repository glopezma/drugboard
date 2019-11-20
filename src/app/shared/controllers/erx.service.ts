import { Injectable, EventEmitter } from '@angular/core';
import { Drug } from '../models/drug.model';
import { HttpClient } from '@angular/common/http';
import { DrugStatusEnumService } from './drug-status-enum.service';
import { Observable } from 'rxjs';
import { ContextBuilderService } from './context-builder.service';

@Injectable({
  providedIn: 'root',
})
export class ERxService {
  private host: string;
  private url: string;
  private testUrl: string;
  private enum: string[] = new DrugStatusEnumService().drugStatusEnum;
  private contextBuilder: ContextBuilderService;
  drugs: Drug[];
  drugsChangedEvent = new EventEmitter<Drug[]>();

  constructor(private http: HttpClient) {
    this.host = 'bolt-erx-dev.medonesystems.com';
    // this.host = 'localhost:44379';
    this.url = `https://${this.host}/api/v1/relay`;
    this.testUrl = `https://${this.host}/api/v1/relay/EchoScript`;
    this.getDrugs();
  }


  getDrugs() {
    console.log('drugs updated');
    const url = `${this.url}/DrugBoard`;
    this.http.get<Drug[]>(url).subscribe(res => {
      this.drugs = res.sort((a, b) => new Date(b.LastModified).getTime() - new Date(a.LastModified).getTime());
      this.drugsChangedEvent.emit(this.drugs);
    });
  }

  isAvailable(): Observable<any> {
    return this.http.get<any>(`${this.url}/IsAvailable`);
  }

  rxRenewalResponse(drug: Drug, approved: boolean): Observable<any> {
    // console.log('refill approved');
    this.contextBuilder = new ContextBuilderService(drug, approved);
    console.log(this.contextBuilder.getRxRenewalResponse());
    return this.http.post<any>(`${this.url}/RxRenewalResponse`, this.contextBuilder.getRxRenewalResponse());
  }

  rxChangeResponse(drug: Drug, approved: boolean): Observable<any> {
    this.contextBuilder = new ContextBuilderService(drug, approved);
    console.log(this.contextBuilder.getRxChangeResponse());
    return this.http.post<any>(`${this.url}/RxChangeResponse`, this.contextBuilder.getRxChangeResponse());
  }

  rxCancelRequest(drug: Drug): Observable<any> {
    this.contextBuilder = new ContextBuilderService(drug);
    console.log(this.contextBuilder.getRxCancelRequest());
    return this.http.post<any>(`${this.url}/CancelRxRequest`, this.contextBuilder.getRxCancelRequest());
  }
}
