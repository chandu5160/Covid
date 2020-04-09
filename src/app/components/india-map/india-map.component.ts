import { Component, OnInit } from '@angular/core';
import { ChartService } from 'src/app/services/chart.service';

@Component({
  selector: 'app-india-map',
  templateUrl: './india-map.component.html',
  styleUrls: ['./india-map.component.css']
})
export class IndiaMapComponent implements OnInit {
  change;
  constructor(private _chartService:ChartService) { }

  ngOnInit() {
  }
  showChart(stateCode) {
    this._chartService.showChart(stateCode);
  }
}
