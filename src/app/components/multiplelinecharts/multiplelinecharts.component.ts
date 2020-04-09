import { Component, OnInit } from '@angular/core';
import * as CanvasJS from 'src/assets/javascripts/canvasjs.min.js';
import { ChartService } from 'src/app/services/chart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-multiplelinecharts',
  templateUrl: './multiplelinecharts.component.html',
  styleUrls: ['./multiplelinecharts.component.css']
})
export class MultiplelinechartsComponent implements OnInit {

  constructor(private _chartService: ChartService,
              private router:Router) {
    // _chartService.multilineChart();
  }

  ngOnInit() {

    if(this._chartService.s1.length > 0){
      this._chartService.multilineChart();
    }
    else{
        this.router.navigate(['/']);
    }

   }
}
