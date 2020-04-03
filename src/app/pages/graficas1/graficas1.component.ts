import { Component, OnInit } from '@angular/core';
import { Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-graficas1',
  templateUrl: './graficas1.component.html',
  styles: []
})
export class Graficas1Component implements OnInit {

  graficos: any = {
    'grafico1': {
      'labels': ['Con Frijoles', 'Con Natilla', 'Con tocino'],
      'data': [24, 30, 46],
      'type': 'doughnut',
      'leyenda': 'El pan se come con'
    },
    'grafico2': {
      'labels': ['Hombres', 'Mujeres'],
      'data': [4500, 6000],
      'type': 'doughnut',
      'leyenda': 'Entrevistados'
    },
    'grafico3': {
      'labels': ['Si', 'No'],
      'data': [95, 5],
      'type': 'doughnut',
      'leyenda': '¿Le dan gases los frijoles?'
    },
    'grafico4': {
      'labels': ['No', 'Si'],
      'data': [85, 15],
      'type': 'doughnut',
      'leyenda': '¿Le importa que le den gases?'
    },
  };

  public leyenda1: string = this.graficos.grafico1.leyenda;
  public leyenda2: string = this.graficos.grafico2.leyenda;
  public leyenda3: string = this.graficos.grafico3.leyenda;
  public leyenda4: string = this.graficos.grafico4.leyenda;

  public etiquetas1: Label[] = this.graficos.grafico1.labels;
  public etiquetas2: Label[] = this.graficos.grafico2.labels;
  public etiquetas3: Label[] = this.graficos.grafico3.labels;
  public etiquetas4: Label[] = this.graficos.grafico4.labels;

  public datos1: MultiDataSet = this.graficos.grafico1.data;
  public datos2: MultiDataSet = this.graficos.grafico2.data;
  public datos3: MultiDataSet = this.graficos.grafico3.data;
  public datos4: MultiDataSet = this.graficos.grafico4.data;

  constructor() { }

  ngOnInit(): void {
  }

}
