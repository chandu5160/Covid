import { Component, OnInit } from '@angular/core';
import * as CanvasJS from 'src/assets/javascripts/canvasjs.min.js';
import { ChartService } from 'src/app/services/chart.service';

@Component({
  selector: 'app-multiplelinecharts',
  templateUrl: './multiplelinecharts.component.html',
  styleUrls: ['./multiplelinecharts.component.css']
})
export class MultiplelinechartsComponent implements OnInit {

  constructor(private _chartService: ChartService) {
    _chartService.multilineChart();
  }

  ngOnInit() {

  }

}
