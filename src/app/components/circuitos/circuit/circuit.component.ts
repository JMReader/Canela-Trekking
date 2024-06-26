import { Component, OnInit } from '@angular/core';

import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Circuit } from 'src/app/core/models/circuit';
import { NavigationEnd, Router } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import { CircuitosService } from 'src/app/core/services/circuitos.service';

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
  
  constructor(private circuitoService: CircuitosService, private sanitizer: DomSanitizer, private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });
  }

  ngOnInit(): void {
    const currentUrl = this.router.url;
    this.circuitId = currentUrl.split('/').pop(); // Obtenemos el id del circuito actual.
    
    this.getCircuitData(this.circuitId)

    //Al seleccionar un circuito si este estaba filtrado por región vuelve a su estilo default
    document.documentElement.style.setProperty('--color-main', 'rgb(37, 115, 153)');
    document.documentElement.style.setProperty('--color-extra', '#a0b6f9');
    document.documentElement.style.setProperty('--color-layouts', '#1c2952');
    document.documentElement.style.setProperty('--fondo-foto', 'url("assets/MAINSTYLE.jpeg")');
  }

  enviarwpp(circuit: string) {
    var x = "https://wa.me/543885148856?text=Hola%20buenas%20queria%20consultar%20sobre%20el%20circuito%20"
      + circuit + " para la fecha de ...( completar en que fecha viaja por favor :) )";
    window.open(x);
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
