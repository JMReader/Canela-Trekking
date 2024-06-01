import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Circuit } from 'src/app/core/models/circuit';
import { ApiService } from 'src/app/core/services/api.service';
import { NavigationEnd, Router } from '@angular/router';
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

  constructor(private api: ApiService, private circuitosService: CircuitosService, private sanitizer: DomSanitizer, private router: Router) {
    this.short = false;
    this.contadorClicks = 0;

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });
  }

  ngOnInit(): void {
    this.getAllCircuits();
  }

  getAllCircuits(){
    this.circuitosService.getAllCircuits().subscribe(
      data => {
        this.circuits = data;
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
    this.router.navigate(['circuits/', circuit._id])
  }

  selectedFilters: { [key: string]: string | null } = {
    duration: null,
    difficulty: null,
    distance: null,
    region: null
  };

  selectFilter(filterType: string, filterValue: string) {
    this.selectedFilters[filterType] = filterValue;

    console.log(this.selectedFilters);
    

    if (filterType === 'region' && filterValue) {
      const theme = this.regionThemeMap[filterValue.toLowerCase()];
      if (theme) {
        for (const property in theme) {
          if (theme.hasOwnProperty(property)) {
            document.documentElement.style.setProperty(property, theme[property]);
          }
        }
      }
    }

    // ***Llamada al service para filtrar los circuitos***
    this.circuitosService.getCircuitsFiltered(this.selectedFilters).subscribe(data => {
      Object.assign(this.circuits, data);
    });
  }

  clearFilter(filterType: string) {
    this.selectedFilters[filterType] = null;
    if (filterType === 'region') {
      const defaultTheme = this.regionThemeMap['default'];
      if (defaultTheme) {
        for (const property in defaultTheme) {
          if (defaultTheme.hasOwnProperty(property)) {
            document.documentElement.style.setProperty(property, defaultTheme[property]);
          }
        }
      }
    }
    this.getAllCircuits();
  }

  regionThemeMap: { [key: string]: { [key: string]: string } } = {
    default: {
      '--color-back': 'rgb(179, 216, 255)',
      '--color-main': 'rgb(37, 115, 153)',
      '--color-extra': '#a0b6f9',
      '--color-layouts': '#1c2952',
      '--fondo-foto': 'url("assets/MAINSTYLE.jpeg")'
    },
    puna: {
      '--color-main': '#3c5c92',
      '--color-extra': '#e5cfb1',
      '--color-layouts': '#6981ad',
      '--fondo-foto': 'url("assets/punaHornocal.jpg")'
    },
    quebrada: {
      '--color-main': '#654321',
      '--color-extra': '#bdcbd2',
      '--color-layouts': '#828275',
      '--fondo-foto': 'url("assets/quebrada-background.jpeg")'
    },
    valles: {
      '--color-main': '#987654',
      '--color-extra': '#595221',
      '--color-layouts': '#a89854',
      '--fondo-foto': 'url("assets/valle-background.jpeg")'
    },
    yungas: {
      '--color-main': '#567890',
      '--color-extra': '#363614',
      '--color-layouts': '#595931',
      '--fondo-foto': 'url("assets/yungas-background.jpeg")'
    }
  };

}
