import { Component, OnInit } from '@angular/core';
import { Circuito } from 'src/app/models/circuito';
import { ApiService } from 'src/app/services/api.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-tilsan',
  templateUrl: './tilsan.component.html',
  styleUrls: ['./tilsan.component.css']
})
export class TilsanComponent implements OnInit {

  circ !: Circuito
  constructor(api: ApiService, private sanitizer: DomSanitizer) {
    this.circ = api.getCircuits()[0]
   }

  ngOnInit(): void {
  }
  enviarwpp (circuit:string) {
    var x = "https://wa.me/543885148856?text="+"Hola quiero conocer los secretos de la naturaleza mediante la travesia desde tilcara a San Francisco" + " para la fecha de ...( completar en que fecha viaja por favor :) )";
    window.open(x);
 }

 sanitizeDescription(description: string): SafeHtml {
  return this.sanitizer.bypassSecurityTrustHtml(description);
}

//desde la api llega un numero en horas si pasa las 24 hay que transofrmarlo a dias,
//si no lo pasa solo devuelve el numeor como string
transformTime(time: number): string {
  if (time > 24) {
    return (time / 24).toFixed(0) + ' días';
  } else {
    return time + ' horas';
  }
}
}
