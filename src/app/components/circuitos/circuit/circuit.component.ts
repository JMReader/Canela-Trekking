import { Component, OnInit } from '@angular/core';

import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Circuit } from 'src/app/core/models/circuit';
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
  circ !: Circuit //aqui debe recibir por parametro para cargar.
  constructor(api: CircuitosService, private sanitizer: DomSanitizer) {
    this.circ =  {
      id: '0',
      name: 'De Tilcara a San Francisco: Travesia entre dos Secretos Naturales ',
      description:
        "  aaaaaaaaaa"
    ,
      preview:
        'Disfruta de los colores de la Quebrada de Humahuaca en este circuito de senderismo.',
        difficulty: 'alta',
      desnivel: 500,
      duration: 96,
      create_date: new Date('2022-10-01'),
      operable: "todo el año",
      distance: 64,
      region: 'Quebrada',
      photos: [
        'assets/TIL-SF/horizontal (4).jpg',
        'assets/TIL-SF/horizontal (5).jpg',
        'assets/TIL-SF/horizontal (6).jpg',
        'assets/TIL-SF/horizontal (7).jpg',
        'assets/TIL-SF/horizontal (8).jpg',
        'assets/TIL-SF/horizontal (9).jpg',
      ],
    }
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
