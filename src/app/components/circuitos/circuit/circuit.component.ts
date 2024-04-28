import { Component, OnInit } from '@angular/core';

import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Circuito } from 'src/app/core/models/circuito';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-circuit',
  templateUrl: './circuit.component.html',
  styleUrls: ['./circuit.component.css']
})
//componente para mostrar la informacion de un circuito : es necesario que lo reciba por parametro para 
//mejorar y minimizar la llamada a la base de datos.
export class CircuitComponent implements OnInit {
  circ !: Circuito //aqui debe recibir por parametro para cargar.
  constructor(api: ApiService, private sanitizer: DomSanitizer) {
    this.circ = api.getCircuits()[0]
   }

  ngOnInit(): void {
  }
  enviarwpp (circuit:string) {
    var x = "https://wa.me/543885148856?text=Hola%20buenas%20queria%20consultar%20sobre%20el%20circuito%20"
    +circuit + " para la fecha de ...( completar en que fecha viaja por favor :) )";
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
}
