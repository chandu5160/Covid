import { Component, OnInit } from '@angular/core';
import * as CanvasJS from 'src/assets/javascripts/canvasjs.min.js';
import { ChartService } from 'src/app/services/chart.service';

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})
export class BarchartComponent implements OnInit {

  constructor(private _chartservice:ChartService) { }

  ngOnInit() {
    
  }

}
