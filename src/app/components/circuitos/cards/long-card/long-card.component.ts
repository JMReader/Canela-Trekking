import { Component, Input, OnInit } from '@angular/core';
import { Circuito } from 'src/app/core/models/circuito';

@Component({
  selector: 'app-long-card',
  templateUrl: './long-card.component.html',
  styleUrls: ['./long-card.component.css']
})
//componente que es una simple idea, recibe un circuito como input
// y muestra su data en forma de carta larga (ocupa toda el largo de la pantalla la carta )
export class LongCardComponent implements OnInit {
  @Input() circuit!: Circuito;
  constructor() { }

  ngOnInit(): void {
  }

}
