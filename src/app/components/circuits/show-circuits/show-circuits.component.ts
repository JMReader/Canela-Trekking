import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Circuito } from 'src/app/models/circuito';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-show-circuits',
  templateUrl: './show-circuits.component.html',
  styleUrls: ['./show-circuits.component.css']
})
export class ShowCircuitsComponent implements OnInit {
  circuits: Array<Circuito> = [];
  f:string = '<i class="fa-solid fa-table-cells-large" aria-hidden="true></i>'
  second:string='<i class="fa-solid fa-table-cells-large"></i>'
  constructor(private api: ApiService, private sanitizer: DomSanitizer) {
    
   }

  ngOnInit(): void {
    this.circuits = this.api.getCircuits();
  }

}
