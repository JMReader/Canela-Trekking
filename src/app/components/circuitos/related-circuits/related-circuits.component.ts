import { Component, OnInit } from '@angular/core';
import { CircuitosService } from 'src/app/core/services/circuitos.service';
import { Circuit } from 'src/app/core/models/circuit';
import { Router } from '@angular/router';

@Component({
  selector: 'app-related-circuits',
  templateUrl: './related-circuits.component.html',
  styleUrls: ['./related-circuits.component.css']
})
export class RelatedCircuitsComponent implements OnInit {

  randomCircuits: Array<Circuit> = [];
  circuits: Array<Circuit> = [];
  photos: string[];
  
  constructor(private circuitService: CircuitosService, private router: Router) {
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
    this.getCircuits();
    setTimeout(() => {
      this.showCircuits(this.circuits)
    }, 600);
  }

  getCircuits() {
    this.circuitService.getAllCircuits().subscribe(
      data => {
        Object.assign(this.circuits, data);
      }
    );
  }

  showCircuits(circuits: Circuit[]){
    for(let i = 0; i < 6; i++){
      let numeroAleatorio = Math.floor(Math.random() * circuits.length);      
      this.randomCircuits.push(circuits[numeroAleatorio]); 
    }
    console.log(this.randomCircuits);
  }

  redirectToCircuit (circuit: Circuit) {
    console.log(circuit._id);    
    this.router.navigate(['circuits/', circuit._id]); 
    setTimeout(() => {
      window.location.reload()
    }, 100); 
  }
  
}
