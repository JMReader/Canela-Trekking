
import { Component, OnInit } from '@angular/core';
import { Circuit } from 'src/app/core/models/circuit';
import { Router } from '@angular/router';
import { CircuitosService } from 'src/app/core/services/circuitos.service';
import { DEFAULT_THEME, REGION_THEME_MAP } from 'src/app/shared/theme/region-theme';
import { scrollToTopOnNavigation } from 'src/app/shared/utils/router-scroll';
import { ThemeService } from 'src/app/core/services/theme.service';

const FILTER_KEYS = ['duration', 'difficulty', 'distance', 'region'] as const;
type CircuitFilterKey = typeof FILTER_KEYS[number];
type CircuitFilters = Record<CircuitFilterKey, string | null>;

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

  constructor(
    private circuitosService: CircuitosService,
    private router: Router,
    private themeService: ThemeService
  ) {
    this.short = false;
    this.contadorClicks = 0;
    scrollToTopOnNavigation(this.router);
  }

  ngOnInit(): void {
    this.getAllCircuits();
  }

  getAllCircuits() {
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


  filtersBack: CircuitFilters = {
    duration: null,
    difficulty: null,
    distance: null,
    region: null
  };

  getFilteredCircuits() {
    // Llamada al service para filtrar los circuitos
    this.circuitosService.getCircuitsFiltered(this.filtersBack).subscribe(data => {
      Object.assign(this.circuits, data);
    });
  }

  selectedFiltersBack(filterType: CircuitFilterKey, filterValue: string) {
    this.filtersBack[filterType] = filterValue;
    this.getFilteredCircuits();
  }

  clearFilterBack(filterType: CircuitFilterKey) {
    this.filtersBack[filterType] = null;

    if (Object.values(this.filtersBack).every(value => value === null)) {
      this.getAllCircuits();
    } else {
      this.getFilteredCircuits();
    }
  }

  //--------------------------------- Inicio Funcionalidad de chips -------------------------------------

  selectedFilters: CircuitFilters = {
    duration: null,
    difficulty: null,
    distance: null,
    region: null
  };

  selectFilter(filterType: CircuitFilterKey, filterValue: string) {
    this.selectedFilters[filterType] = filterValue;

    if (filterType === 'region' && filterValue) {
      const key = filterValue.toLowerCase() as keyof typeof REGION_THEME_MAP;
      const theme = REGION_THEME_MAP[key];
      if (theme) {
        this.themeService.applyTheme(theme);
      }
    }
  }

  clearFilter(filterType: CircuitFilterKey) {
    this.selectedFilters[filterType] = null;
    if (filterType === 'region') {
      if (DEFAULT_THEME) {
        this.themeService.applyTheme(DEFAULT_THEME);
      }
    }
  }

  //--------------------------------- Fin Funcionalidad de chips -------------------------------------
}
