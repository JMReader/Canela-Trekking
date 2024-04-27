import { Component, OnInit } from '@angular/core';
import { Circuito } from 'src/app/models/circuito';
import { ApiService } from 'src/app/services/api.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-circuit',
  templateUrl: './circuit.component.html',
  styleUrls: ['./circuit.component.css']
})
export class CircuitComponent implements OnInit {
  circ !: Circuito
  constructor(api: ApiService, private sanitizer: DomSanitizer) {
    this.circ = api.getCircuits()[0]

   }

  ngOnInit(): void {
  }
  enviarwpp (circuit:string) {
    var x = "https://wa.me/543885148856?text=Hola%20buenas%20queria%20consultar%20sobre%20el%20circuito%20"+circuit+ " para la fecha de ...( completar en que fecha viaja por favor :) )";
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
