import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CircuitComponent } from './components/circuitos/circuit/circuit.component';
import { ShowCircuitsComponent } from './components/circuitos/show-circuits/show-circuits.component';
import { HomeComponent } from './components/circuitos/home/home.component';
import { TilsanComponent } from './components/circuitos/tilsan/tilsan.component';
import { LandingComponent } from './components/landing/landing.component';

const routes: Routes = [ 
  {path:'', component: LandingComponent},
  {path:'circuits/tilcara-sanfrancisco', component:TilsanComponent},
  {path:'circuits', component:ShowCircuitsComponent},
  {path:'circuits/:id', component:CircuitComponent},
  {path:'**', redirectTo:''}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
