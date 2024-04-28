import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})
export class LandingComponent implements OnInit {
  constructor() {}
  backgroundImage = 'assets/backgroundAll.webp'; 
  ngOnInit(): void {}
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
