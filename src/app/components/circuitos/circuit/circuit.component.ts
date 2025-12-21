import { Component, OnInit } from '@angular/core';

import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Circuit } from 'src/app/core/models/circuit';
import { Router } from '@angular/router';

import { CircuitosService } from 'src/app/core/services/circuitos.service';
import { ThemeService } from 'src/app/core/services/theme.service';

import {
  CIRCUIT_WHATSAPP_MESSAGE_PREFIX,
  CIRCUIT_WHATSAPP_MESSAGE_SUFFIX,
  WHATSAPP_PHONE_NUMBER
} from 'src/app/shared/constants';
import { DEFAULT_THEME } from 'src/app/shared/theme/region-theme';
import { scrollToTopOnNavigation } from 'src/app/shared/utils/router-scroll';


@Component({
  selector: 'app-circuit',
  templateUrl: './circuit.component.html',
  styleUrls: ['./circuit.component.css']
})
//componente para mostrar la informacion de un circuito : es necesario que lo reciba por parametro para 
//mejorar y minimizar la llamada a la base de datos.
export class CircuitComponent implements OnInit {
  circ!: Circuit //aqui debe recibir por parametro para cargar.
  circuitId!: string | undefined; 
  
  constructor(
    private circuitoService: CircuitosService,
    private sanitizer: DomSanitizer,
    private router: Router,
    private themeService: ThemeService
  ) {
    scrollToTopOnNavigation(this.router);
  }


  ngOnInit(): void {
    const currentUrl = this.router.url;
    this.circuitId = currentUrl.split('/').pop(); // Obtenemos el id del circuito actual.
    
    this.getCircuitData(this.circuitId)

    //Al seleccionar un circuito si este estaba filtrado por región vuelve a su estilo default
    this.themeService.applyTheme(DEFAULT_THEME);
  }

  enviarwpp(circuit: string) {
    const url = `https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${CIRCUIT_WHATSAPP_MESSAGE_PREFIX}${circuit}${CIRCUIT_WHATSAPP_MESSAGE_SUFFIX}`;
    window.open(url);
  }

  sanitizeDescription(description: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(description);
  }

  //desde la api llega un numero en horas si pasa las 24 hay que transofrmarlo a dias,
  //si no lo pasa solo devuelve el numero como string
  transformTime(time: number): string {
    if (time > 24) {
      return (time / 24).toFixed(0) + ' días';
    } else {
      return time + ' horas';
    }
  }

  getCircuitData(circuitId: string | undefined) {
    this.circuitoService.getCircuit(circuitId).subscribe((result) => {
      this.circ = result;
    });
  }
}
