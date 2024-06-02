import { Component, OnInit } from '@angular/core';


import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ApiService } from 'src/app/core/services/api.service';
import { Circuit } from 'src/app/core/models/circuit';

@Component({
  selector: 'app-tilsan',
  templateUrl: './tilsan.component.html',
  styleUrls: ['./tilsan.component.css'],
})
//componente que describe la travesia
//estrella de canela trekking, de tilcara a san francisco
export class TilsanComponent implements OnInit {
  circ!: Circuit;
  constructor(api: ApiService, private sanitizer: DomSanitizer) {
    this.circ  = 
            {
              _id: '', 
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

  ngOnInit(): void {}
  enviarwpp(circuit: string) {
    var x =
      'https://wa.me/543885148856?text=' +
      'Hola quiero conocer los secretos de la naturaleza mediante la travesia desde tilcara a San Francisco' +
      ' para la fecha de ...( completar en que fecha viaja por favor :) )';
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
