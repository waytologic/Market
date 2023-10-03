import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-chartview',
  templateUrl: './chartview.component.html',
  styleUrls: ['./chartview.component.scss']
})
export class ChartviewComponent implements OnInit {

  mychart:any;
  mydata:any;
  mydates:any[] = [];
  myvalues:any[] = [];

  constructor(
    private _empService: EmployeeService,

  ) {}

  ngOnInit(): void {
    var dom = document.getElementById('chart');
    this.mychart = echarts.init(dom, null, {
      renderer: 'canvas',
      useDirtyRect: false
    });
    this.getEmployeeList();
    this.Candlechart();
  }

  getEmployeeList() {
    this._empService.getEmployeeList().subscribe({
      next: (res) => {
        this.mydata = res;
        console.log(this.mydata);
        for(var i=0;i<this.mydata;i++){
          this.mydata.push(this.mydata.dates[i])
        }

        console.log(this.mydates);
      },
      error: console.log,
    });
  }

  Candlechart(){
    this.mychart.setOption({
      xAxis: {
        data: ['2017-10-24', '2017-10-25', '2017-10-26', '2017-10-27']
      },
      yAxis: {},
      series: [
        {
          type: 'candlestick',
          data: [
            [20, 34, 10, 38],
            [40, 35, 30, 50],
            [31, 38, 33, 44],
            [38, 15, 5, 42]
          ]
        }
      ]
    });

    this.mychart.Option(true);
  }

}
