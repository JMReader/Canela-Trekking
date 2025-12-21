import { Component, OnInit } from '@angular/core';
import { FACEBOOK_URL, INSTAGRAM_URL, LANDING_WHATSAPP_MESSAGE, WHATSAPP_BASE_URL } from 'src/app/shared/constants';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  // Social links
  readonly instagramUrl = INSTAGRAM_URL;
  readonly facebookUrl = FACEBOOK_URL;
  readonly whatsappUrl = `${WHATSAPP_BASE_URL}?text=${LANDING_WHATSAPP_MESSAGE}`;

  constructor() { }

  ngOnInit(): void {
  }

}
