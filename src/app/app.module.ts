import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DrugboardComponent } from './drugboard/drugboard.component';
import { DrugListComponent } from './drugboard/drug-list/drug-list.component';
import { DrugItemComponent } from './drugboard/drug-list/drug-item/drug-item.component';
import { DrugDetailsComponent } from './drugboard/drug-details/drug-details.component';
@NgModule({
  declarations: [
    AppComponent,
    DrugboardComponent,
    DrugListComponent,
    DrugItemComponent,
    DrugDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
