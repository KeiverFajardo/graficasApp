import { Component, ViewChild, OnInit, Input } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartType, ChartConfiguration, ChartData, ChartEvent } from 'chart.js';

@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styleUrls: ['./grafica-barra.component.css']
})
export class GraficaBarraComponent implements OnInit {

  
  @Input() horizontal: boolean = false;
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
  };
  @Input() barChartType: ChartType = 'bar';
  
  public barChartLegend = true;

  @Input() barChartData: ChartData<'bar'> = {
    labels: [ 
     // '2019', '2020', '2021', '2022', '2023', '2024', '2025' 
    ],
    datasets: [
    //  { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Series A', backgroundColor: '#ED5F76', hoverBackgroundColor: 'red'},
    //  { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B', backgroundColor: '#F763C4', hoverBackgroundColor: 'red'},
    //  { data: [ 38, 98, 70, 59, 26, 27, 20 ], label: 'Series C', backgroundColor: '#D665E0', hoverBackgroundColor: 'red'}
    ]
  };

  // events
  public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  constructor() {}

  ngOnInit(): void {
    if ( this.horizontal ){
      this.barChartType = 'line';
    }
  }

}
