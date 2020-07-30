import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { DatatableComponent } from './datatable/datatable.component';

import { CommonService } from './services/common.service';
import { AlertComponent } from './components/alert-box/alert.component';
import { AlertService } from './components/alert-box/alert.service';
@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    DatatableComponent,
    AlertComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [CommonService,AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
