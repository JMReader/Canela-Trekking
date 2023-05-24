import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SharedDataService } from 'src/app/services/shared-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  regiones =  ["Todos", "puna", "Quebrada", "Yungas", "Valle"]
  region_actual = this.regiones[0]
  contador = 0
  constructor(private Shared: SharedDataService) {

   }
  ngOnInit(): void {
  }
  //envia mediante output los eventos de cambiar las regiones para que las reciba el home component
  @Output() circuitSelected = new EventEmitter<string>();

  //cambia de region a la siguiente 
  nextRegion(){
  if (this.contador == this.regiones.length-1){
    this.contador = 0
  }else{
    this.contador += 1
  }
  this.region_actual = this.regiones[this.contador]
  this.Shared.selectedCircuit = this.region_actual;
  this.circuitSelected.emit(this.region_actual);
  }
  //cambia la region a la anterior
  prevRegion(){
    if ( this.contador == 0){
      this.contador = this.regiones.length-1
    }
    else{
      this.contador -= 1
    }
    this.region_actual = this.regiones[this.contador]
    this.Shared.selectedCircuit = this.region_actual;
    this.circuitSelected.emit(this.region_actual);
  }

}
