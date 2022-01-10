import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TablePageComponent } from './table-page/table-page.component';
import { FormPageComponent } from './form-page/form-page.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { HttpClientModule } from '@angular/common/http'; 
import { MatSortModule } from '@angular/material/sort';
import { ContacFormModule } from './components/contact-form/contact-form.module';
import { MatButtonModule } from '@angular/material/button';
@NgModule({
  declarations: [
    AppComponent,
    TablePageComponent,
    FormPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatSortModule,
    ContacFormModule
  ],
  providers: [],
  //use this in case to assign url from contact form module import
  // providers: [
    //   {provide: 'serviceUrl', useValue: 'http://custom.url.for.service'},
    // ]
  bootstrap: [AppComponent]
})
export class AppModule { }
