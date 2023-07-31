import { Component, OnInit } from '@angular/core';
import { Circuito } from 'src/app/models/circuito';
import { Style } from 'src/app/models/style';
import { SharedDataService } from 'src/app/services/shared-data.service';
import {ElementRef, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  //interfaz para definir las variables de css 


  
  titulo:String = 'Circuitos de Senderismo';



  circuitos!: Circuito[];
  styles !: Style[];
  selectedStyle!: Style 



  constructor(private Shared: SharedDataService, private api :ApiService) { 
    this.styles= api.getStyles();
    this.selectedStyle = this.styles[0];
    this.circuitos = api.getCircuits();
  }

 get selectedCircuit() {
  for (let i = 0; i < this.styles.length; i++) {
    if (this.styles[i].name == this.Shared.selectedRegion) {
      this.selectedStyle = this.styles[i];
      console.log(this.selectedStyle);
    }
  } 
  return this.Shared.selectedRegion;
  }
  generateCssRules(): string {
    return `main{
        --color-hovcarta: ${this.selectedStyle.colorHovcarta};
        --color-back: ${this.selectedStyle.colorBack};
        --color-main: ${this.selectedStyle.colorMain};
        --color-carta: ${this.selectedStyle.colorCarta};
        --color-titulo: ${this.selectedStyle.colorTitulo};
        --color-subtitulo: ${this.selectedStyle.colorSubtitulo};
        --color-foot: ${this.selectedStyle.colorFoot};
        --color-contactenos: ${this.selectedStyle.colorContactenos};
        --fondo-foto: ${this.selectedStyle.fondoFoto};
    }`;
  }
  ngOnInit(): void {
  
  }

}
