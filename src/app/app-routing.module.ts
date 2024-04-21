import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';

import { TilsanComponent } from './components/tilsan/tilsan.component';
import { ShowCircuitsComponent } from './components/circuits/show-circuits/show-circuits.component';
import { HomeComponent } from './components/home/home.component';
import { CircuitComponent } from './components/circuits/circuit/circuit.component';

const routes: Routes = [ 
  {path:'', component: LandingComponent},
  {path:'about', component:LandingComponent},
  {path:'tilcara-sanfrancisco', component:TilsanComponent},
  {path:'circuits', component:ShowCircuitsComponent},
  {path:'home', component:HomeComponent},
  {path:'circuit', component:CircuitComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
