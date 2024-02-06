import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { CircuitComponent } from './components/circuit/circuit.component';

const routes: Routes = [ 
  {path:'', component: LandingComponent},
  {path:'about', component:LandingComponent},
  {path:'tilcara-sanfrancisco', component:CircuitComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
