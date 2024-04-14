import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-show-circuits',
  templateUrl: './show-circuits.component.html',
  styleUrls: ['./show-circuits.component.css']
})
export class ShowCircuitsComponent implements OnInit {
  circuits: Array<any> = [];
  constructor(private api: ApiService, private sanitizer: DomSanitizer) {
    
   }

  ngOnInit(): void {
    this.circuits = this.api.getCircuits();
  }

}
