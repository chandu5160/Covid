import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import * as CanvasJS from 'src/assets/javascripts/canvasjs.min.js';

@Injectable({
  providedIn: 'root'
})

export class ChartService {
  apiUrl = environment.apiUrl;
  mapId=null;
  name;
  code;
  date = [];
  s1 = [];
  s2 = [];
  s3 = [];
  s4 = [];
  barchart = [];
  constructor(private router: Router, private http: HttpClient) {
    http.get(this.apiUrl + "/data").subscribe(data => {
      this.converdata(data);
    })
  }

  showChart(stateCode) {
    console.log(stateCode)
    this.mapId = stateCode;
    this.router.navigate(['/state-chart'])

  }

  async converdata(data) {
    await data.forEach(element => {
      this.name = element[0];
      this.code = element[1];
      var d = { x: new Date(element[2]), y: element[3] };
      var d2 = { x: new Date(element[2]), y: element[4] };

      var d3 = { x: new Date(element[2]), y: element[5] };
      var d4 = { y: element[5], x: new Date(element[2]) }
      this.s1.push(d);
      this.s2.push(d2)
      this.s3.push(d3);
      this.barchart.push(d4);
    });
     this.barChart();
     this.line1Chart();
     this.line2Chart();
     this.line3Chart();
    this.cumulativeMultilineChart();

    this.predectionbarChart();
  }
cumulativeMultilineChart() {
  var chart = new CanvasJS.Chart("cumulativeMultilineChartContainer", {
    animationEnabled: true,
    title: {
      text: this.name
    },
    axisX: {
      valueFormatString: "DD MMM,YY"
    },
    axisY: {
      title: "People",

    },
    legend: {
      cursor: "pointer",
      fontSize: 16,
      itemclick: toggleDataSeries
    },
    toolTip: {
      shared: true
    },
    data: [{
      name: "s1",
      type: "spline",
      // yValueFormatString: "#0.## °C",
      showInLegend: true,
      dataPoints: this.s1
    },
    {
      name: "s2",
      type: "spline",
      // yValueFormatString: "#0.## °C",
      showInLegend: true,
      dataPoints: this.s2
    },
    {
      name: "s3",
      type: "spline",
      // yValueFormatString: "#0.## °C",
      showInLegend: true,
      dataPoints: this.s3
    }]
  });

  chart.render();

  function toggleDataSeries(e) {
    if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
      e.dataSeries.visible = false;
    }
    else {
      e.dataSeries.visible = true;
    }
    chart.render();
  }
}


  multilineChart() {
    var chart = new CanvasJS.Chart("multilineContainer", {
      animationEnabled: true,
      title: {
        text: this.name
      },
      axisX: {
        valueFormatString: "DD MMM,YY"
      },
      axisY: {
        title: "People",

      },
      legend: {
        cursor: "pointer",
        fontSize: 16,
        itemclick: toggleDataSeries
      },
      toolTip: {
        shared: true
      },
      data: [{
        name: "s1",
        type: "area",
        // yValueFormatString: "#0.## °C",
        showInLegend: true,
        dataPoints: this.s1
      },
      {
        name: "s2",
        type: "area",
        // yValueFormatString: "#0.## °C",
        showInLegend: true,
        dataPoints: this.s2
      },
      {
        name: "s3",
        type: "area",
        // yValueFormatString: "#0.## °C",
        showInLegend: true,
        dataPoints: this.s3
      }]
    });

    chart.render();

    function toggleDataSeries(e) {
      if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
        e.dataSeries.visible = false;
      }
      else {
        e.dataSeries.visible = true;
      }
      chart.render();
    }
  }

  barChart() {
    let chart = new CanvasJS.Chart("barchartContainer", {
      animationEnabled: true,
      title: {
        text: "Basic bar Chart"
      },
      axisX: {
        valueFormatString: "DD MMM,YY"
      },
      data: [{
        type: "column",
        dataPoints: this.barchart
      }]
    });

    chart.render();
  }

  predectionbarChart() {
    let chart = new CanvasJS.Chart("predectionContainer", {
      animationEnabled: true,
      title: {
        text: "Basic bar Chart"
      },
      axisX: {
        valueFormatString: "DD MMM,YY"
      },
      data: [{
        type: "column",
        dataPoints: this.barchart
      }]
    });

    chart.render();
  }

  line1Chart() {
    let chart = new CanvasJS.Chart("line1chartContainer", {
      animationEnabled: true,
      title: {
        text: "Basic line Chart"
      },

      axisX: {
        valueFormatString: "DD MMM,YY"
      },
      backgroundColor: "#ffcccc",
      data: [{
        type: "area",
        lineColor: "red",
        dataPoints: this.barchart
      }]
    });

    chart.render();
  }

  line2Chart() {
    let chart = new CanvasJS.Chart("line2chartContainer", {
      animationEnabled: true,
      title: {
        text: "Basic line Chart"
      },
      backgroundColor: "#ffffcc",
      axisX: {
        valueFormatString: "DD MMM,YY"
      },
      data: [{
        type: "line",
        lineColor: "yellow",
        dataPoints: this.barchart
      }]
    });

    chart.render();
  }

  line3Chart() {
    let chart = new CanvasJS.Chart("line3chartContainer", {
      animationEnabled: true,
      backgroundColor: "#ccffdd",
      title: {
        text: "Basic line Chart"
      },
      axisX: {
        valueFormatString: "DD MMM,YY"
      },
      data: [{
        type: "line",
        lineColor: "green",
        dataPoints: this.barchart
      }]
    });

    chart.render();
  }
}
