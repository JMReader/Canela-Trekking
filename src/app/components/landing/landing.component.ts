import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})
export class LandingComponent implements OnInit {
  constructor() {
    
  }
  backgroundImage = 'assets/backgroundAll.webp'; 
  ngOnInit(): void {
   
     document.body.setAttribute(
      'style',
      '--color-back: rgb(179, 216, 255); --color-main :rgb(37, 115, 153);--color-extra: #a0b6f9;--color-layouts : #1c2952; --fondo-foto: url("assets/MAINSTYLE.jpeg")')
  }
  openWindow(opc: string) {
    var x = '';
    switch (opc) {
      case 'wpp':
        x =
          'https://wa.me/543885148856?text=¡Hola! Estoy interesado/a en obtener más información sobre tus servicios de trekking. ¿Me puedes brindar detalles?';
        break;
      case 'ig':
        x = 'https://www.instagram.com/canela.trekking.jujuy/';
        break;
      case 'face':
        x = 'https://www.facebook.com/canela.trekking.jujuy/';
        break;
    }
    window.open(x);
  }
}
