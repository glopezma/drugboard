import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DrugboardComponent } from './drugboard/drugboard.component';
import { DrugListComponent } from './drugboard/drug-list/drug-list.component';
import { DrugDetailsComponent } from './drugboard/drug-details/drug-details.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { DrugStatusHighlightDirective } from './drugboard/drug-list/drug-status-highlight.directive';
import { HeaderComponent } from './drugboard/header/header.component';
@NgModule({
  declarations: [
    AppComponent,
    DrugboardComponent,
    DrugListComponent,
    DrugDetailsComponent,
    DrugStatusHighlightDirective,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
