import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.css']
})
export class CarrouselComponent implements OnInit {
  @Input() images!: string[] ;
  @Input() id!: string;
  constructor() { }

  ngOnInit(): void {
    //console.log(this.images)
    
  } 

}
