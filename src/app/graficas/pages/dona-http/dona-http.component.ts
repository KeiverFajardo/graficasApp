import { Component, OnInit } from '@angular/core';
import { GraficasService } from '../../services/graficas.service';
import { ChartType, ChartData } from 'chart.js';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styleUrls: ['./dona-http.component.css']
})
export class DonaHttpComponent implements OnInit {

  public doughnutChartLabels: string[] = [
    // 'Download Sales', 'In-Store Sales', 'Mail-Order Sales', 'Other'
  ];

  public doughnutChartData: ChartData<'doughnut'> = {
    labels: [],//this.doughnutChartLabels,
    datasets: [
      { data: [ 
       // 350, 450, 100 
      ] }
    ]
  };

  public doughnutChartType: ChartType = 'doughnut';

  constructor(private graficasServices : GraficasService) { }

  ngOnInit(): void {

    // this.graficasService.getUsuariosRedesSociales()
    //   .subscribe( data => {
    //     console.log(data);
    //     const labels = Object.keys( data );
    //     const values = Object.values( data );

    //     this.doughnutChartLabels = labels;
    //     this.doughnutChartData.push( values );

    //   });

    this.graficasServices.getUsuariosRedesSocialesDonaData()
    .subscribe( ({ labels, values }) => {
    console.log(labels, values);

      this.doughnutChartData.datasets[0].data = values;
      this.doughnutChartData.labels = labels;

    })
  }

}
