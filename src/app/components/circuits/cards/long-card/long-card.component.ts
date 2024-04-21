import { Component, Input, OnInit } from '@angular/core';
import { Circuito } from 'src/app/models/circuito';

@Component({
  selector: 'app-long-card',
  templateUrl: './long-card.component.html',
  styleUrls: ['./long-card.component.css']
})
export class LongCardComponent implements OnInit {
  @Input() circuit!: Circuito;
  constructor() { }

  ngOnInit(): void {
  }

}
