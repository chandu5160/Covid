import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { IndiaMapComponent } from './components/india-map/india-map.component';
import { MultiplelinechartsComponent } from './components/multiplelinecharts/multiplelinecharts.component';
import { AppRoutingModule } from './components/app.routing';

import { HttpClientModule } from '@angular/common/http';
import { BarchartComponent } from './components/barchart/barchart.component';
import { LinechartComponent } from './components/linechart/linechart.component';
import { ChartService } from './services/chart.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IndiaMapComponent,
    MultiplelinechartsComponent,
    BarchartComponent,
    LinechartComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ChartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
