import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';

import { TilsanComponent } from './components/circuits/tilsan/tilsan.component';
import { ShowCircuitsComponent } from './components/circuits/show-circuits/show-circuits.component';

const routes: Routes = [ 
  {path:'', component: LandingComponent},
  {path:'about', component:LandingComponent},
  {path:'tilcara-sanfrancisco', component:TilsanComponent},
  {path:'circuits', component:ShowCircuitsComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
