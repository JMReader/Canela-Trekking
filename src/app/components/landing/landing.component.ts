import { Component, OnInit } from '@angular/core';
import { DEFAULT_THEME } from 'src/app/shared/theme/region-theme';
import { FACEBOOK_URL, INSTAGRAM_URL, LANDING_WHATSAPP_MESSAGE, WHATSAPP_BASE_URL } from 'src/app/shared/constants';

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
   
     for(const property in DEFAULT_THEME) {
       if (DEFAULT_THEME.hasOwnProperty(property)) {
         document.documentElement.style.setProperty(property, (DEFAULT_THEME as any)[property]);
       }
     }
  }
  openWindow(opc: string) {
    var x = '';
    switch (opc) {
      case 'wpp':
        x = `${WHATSAPP_BASE_URL}?text=${LANDING_WHATSAPP_MESSAGE}`;
        break;
      case 'ig':
        x = INSTAGRAM_URL;
        break;
      case 'face':
        x = FACEBOOK_URL;
        break;
    }
    window.open(x);
  }
}
