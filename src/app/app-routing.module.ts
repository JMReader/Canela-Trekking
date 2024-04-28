import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CircuitComponent } from './components/circuitos/circuit/circuit.component';
import { ShowCircuitsComponent } from './components/circuitos/show-circuits/show-circuits.component';
import { TilsanComponent } from './components/circuitos/tilsan/tilsan.component';
import { LandingComponent } from './components/landing/landing.component';

const routes: Routes = [ 
  //pagina landing lo primero que ve el usuario 
  {path:'', component: LandingComponent}, 

  // muestra todos los circuitos traidos desde la api
  {path:'circuits', component:ShowCircuitsComponent}, 

  //muestra el circuito/travesia "estrella" del emprendimiento
  {path:'circuits/tilcara-sanfrancisco', component:TilsanComponent},
  
  //muestra un circuito concreto, se pasa por input
  // el circuito pero en caso de entrar directamente al link se tra desde api
  {path:'circuits/:id', component:CircuitComponent},

  //redirecciona a landing
  {path:'**', redirectTo:''}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
