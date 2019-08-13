import { Component, OnInit } from '@angular/core';
import { UnidadesEconomicasService } from '../services/unidades-economicas.service';
import { Unidad } from '../interfaces/unidad';

@Component({
  selector: 'app-marcas',
  templateUrl: './marcas.component.html',
  styleUrls: [
    './marcas.component.css',
    './../../../node_modules/animate.css/animate.min.css'
  ]
})
export class MarcasComponent implements OnInit {
  unidades: Unidad[];
  constructor(
    private unidadesService: UnidadesEconomicasService
  ) {
    this.unidades = this.unidadesService.getUnidades();
    console.log(this.unidades);
   }

  ngOnInit() {
  }


}
