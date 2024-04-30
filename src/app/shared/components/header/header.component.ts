import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { SharedDataService } from 'src/app/core/services/shared-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  regiones = ["Todos", "Puna", "Quebrada", "Yungas", "Valle"]
  region_actual = this.regiones[0]
  contador = 0
  menuAbierto = false;
  constructor(private Shared: SharedDataService, private api: ApiService) {

  }
  ngOnInit(): void {
  }

  isScrolled:boolean = false;

  @HostListener('window:scroll')
  scrollEvent() {
    const scrollPosition = window.scrollY;
    if (scrollPosition >= 1500 && scrollPosition < 2000) {
      this.isScrolled = true;
    } else if (scrollPosition >= 2000) {
      this.isScrolled = false;
    } else {
      this.isScrolled = false;
    }
  }
  
  //envia mediante output los eventos de cambiar las regiones para que las reciba el home component
  @Output() circuitSelected = new EventEmitter<string>();

  //cambia de region a la siguiente 
  nextRegion() {
    if (this.contador == this.regiones.length - 1) {
      this.contador = 0
    } else {
      this.contador += 1
    }
    this.region_actual = this.regiones[this.contador]
    this.Shared.selectedRegion = this.region_actual;
    this.circuitSelected.emit(this.region_actual);

  }
  //cambia la region a la anterior
  prevRegion() {
    if (this.contador == 0) {
      this.contador = this.regiones.length - 1
    }
    else {
      this.contador -= 1
    }
    this.region_actual = this.regiones[this.contador]
    this.Shared.selectedRegion = this.region_actual;
    this.circuitSelected.emit(this.region_actual);
    console.log(this.contador)
  }
  
  // getBackgroungdColor() {
  //   switch (this.contador) {
  //     case 0:
  //       return "#0d5262"
  //     case 1:
  //       return "white"
  //     case 2:
  //       return "blue"
  //     case 3:
  //       return "violet"
  //     case 4: //valle
  //       return "#b8bd41"
  //     default:
  //       return "bg-primary"
  //   }
  // }
}
