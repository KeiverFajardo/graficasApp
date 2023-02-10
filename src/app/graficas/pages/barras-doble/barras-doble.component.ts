import { Component } from '@angular/core';
import { ChartData } from 'chart.js';

@Component({
  selector: 'app-barras-doble',
  templateUrl: './barras-doble.component.html',
  styleUrls: ['./barras-doble.component.css']
})
export class BarrasDobleComponent {

 
  public barChartData: ChartData<'bar'> = {
    labels: [ 
      '2019', '2020', '2021', '2022', '2023', '2024', '2025' 
    ],
    datasets: [
      { data: [ 15, 79, 20, 61, 26, 35, 90 ], label: 'Series A', backgroundColor: '#ED6T76', hoverBackgroundColor: 'red'},
    ]
  }
  
  public proveedoresData: ChartData<'bar'> = {
      labels: [ 
        '2019', '2020', '2021', '2022', '2023', '2024', '2025' 
      ],
      datasets: [
        { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Series A', backgroundColor: '#ED5F76', hoverBackgroundColor: 'red'},
        { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B', backgroundColor: '#F763C4', hoverBackgroundColor: 'red'},
      ]
  }
}
