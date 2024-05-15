import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Circuit } from 'src/app/core/models/circuit';
import { ApiService } from 'src/app/core/services/api.service';
import { Router } from '@angular/router';
import { CircuitosService } from 'src/app/core/services/circuitos.service';


@Component({
  selector: 'app-show-circuits',
  templateUrl: './show-circuits.component.html',
  styleUrls: ['./show-circuits.component.css']
})
export class ShowCircuitsComponent implements OnInit {
  circuits: Array<Circuit> = [];
  short: boolean;
  contadorClicks: number; //para solucionar bug de los dos clicks
  getCircuitId: string = '';
  photos: string[];

  constructor(private api: ApiService, private circuitosService: CircuitosService, private sanitizer: DomSanitizer, private router: Router) {
    this.short = false;
    this.contadorClicks = 0;
    this.photos= [
      'assets/TIL-SF/horizontal (4).jpg',
      'assets/TIL-SF/horizontal (5).jpg',
      'assets/TIL-SF/horizontal (6).jpg',
      'assets/TIL-SF/horizontal (7).jpg',
      'assets/TIL-SF/horizontal (8).jpg',
      'assets/TIL-SF/horizontal (9).jpg',
    ]
  }

  ngOnInit(): void {
    this.circuitosService.getAllCircuits().subscribe(
      data => {
        this.circuits = data;
        console.log("circuitos", this.circuits);
        console.log("data", data);
      }
    );
  }

  changeShort() {
    //por alguna razon cambia recien a la segunda vez entonces esto lo contraresta 
    this.contadorClicks++
    if (this.contadorClicks % 2 == 0) {
      this.short = !this.short;
    }
  }

  redirectToCircuit(circuit: Circuit) {
    console.log(circuit._id);    
    this.router.navigate(['circuits/', circuit._id])
  }

}
