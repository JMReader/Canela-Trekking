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
  short:boolean;
  contadorClicks:number; //para solucionar bug de los dos clicks
  
  constructor(private api: ApiService, private sanitizer: DomSanitizer) {
    this.short= false;
    this.contadorClicks=0;
   }

  ngOnInit(): void {
    this.circuits = this.api.getCircuits();
  }
  changeShort(){
    this.contadorClicks++
    if(this.contadorClicks%2==0){
      this.short = !this.short;
    
    }
    
  }

}
