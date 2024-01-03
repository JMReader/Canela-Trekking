import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-circuit-form',
  templateUrl: './circuit-form.component.html',
  styleUrls: ['./circuit-form.component.css']
})
export class CircuitFormComponent implements OnInit {
  cantOfUrl:number =0
  file:boolean= false;
  UrlArray:Array<number> =[]
  constructor() { }

  ngOnInit(): void {
    this.UrlArray.push(1)
  }
  selectChange(n:number){
    this.UrlArray =[]
    for(let i=0;i<n;i++){
      this.UrlArray.push(1)
    }
  }
}
