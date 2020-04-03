import { Component, OnInit, Input } from '@angular/core';
import { Label, MultiDataSet } from 'ng2-charts';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-grafica',
  templateUrl: './grafica-dona.component.html',
  styles: []
})
export class GraficaDonaComponent implements OnInit {

  @Input() leyenda: string;
  @Input() etiquetas: Label[];
  @Input() datos: MultiDataSet;

  tipo: ChartType = 'doughnut';

  public doughnutChartLabels: Label[] = this.etiquetas;
  public doughnutChartData: MultiDataSet = this.datos;
  public doughnutChartType: ChartType = this.tipo;

  constructor() { }

  ngOnInit(): void {
  }

}
