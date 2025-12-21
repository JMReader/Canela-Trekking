import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { SharedDataService } from 'src/app/core/services/shared-data.service';
import { FACEBOOK_URL, INSTAGRAM_URL, WHATSAPP_BASE_URL } from 'src/app/shared/constants';

const SCROLL_ACTIVE_START = 1500;
const SCROLL_ACTIVE_END = 2000;

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
  
  // Social links
  readonly instagramUrl = INSTAGRAM_URL;
  readonly facebookUrl = FACEBOOK_URL;
  readonly whatsappUrl = WHATSAPP_BASE_URL;

  constructor(private Shared: SharedDataService, private api: ApiService) {

  }
  ngOnInit(): void {
  }

  isScrolled:boolean = false;

  @HostListener('window:scroll')
  scrollEvent() {
    const scrollPosition = window.scrollY;
    if (scrollPosition >= SCROLL_ACTIVE_START && scrollPosition < SCROLL_ACTIVE_END) {
      this.isScrolled = true;
    } else if (scrollPosition >= SCROLL_ACTIVE_END) {
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
  }
}
