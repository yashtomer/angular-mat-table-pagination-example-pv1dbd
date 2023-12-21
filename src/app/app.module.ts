import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SimpleMatTableComponent } from './simple-mat-table/simple-mat-table.component';
import { MaterialComponentsModule } from './material-components/material-components.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent, SimpleMatTableComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialComponentsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
