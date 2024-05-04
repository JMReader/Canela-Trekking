import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Circuit } from 'src/app/core/models/circuit';
import { ApiService } from 'src/app/core/services/api.service';
import { CircuitosService } from 'src/app/core/services/circuitos.service';


@Component({
  selector: 'app-show-circuits',
  templateUrl: './show-circuits.component.html',
  styleUrls: ['./show-circuits.component.css']
})
export class ShowCircuitsComponent implements OnInit {
  circuits: Array<Circuit> = [];
  short:boolean;
  contadorClicks:number; //para solucionar bug de los dos clicks
  
  constructor(private api: ApiService, private circuitosService:CircuitosService, private sanitizer: DomSanitizer) {
    this.short= false;
    this.contadorClicks=0;
   }

  ngOnInit(): void {
    this.circuitosService.getAllCircuits().subscribe(
      data=>{
        this.circuits = data;
        console.log("circuitos", this.circuits);
        console.log("data", data);
      }
    );
  }
  changeShort(){
    //por alguna razon cambia recien a la segunda vez entonces esto lo contraresta 
    this.contadorClicks++
    if(this.contadorClicks%2==0){
      this.short = !this.short;
    }
    
  }

}
