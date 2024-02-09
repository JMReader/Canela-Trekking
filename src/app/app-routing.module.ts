import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';

import { TilsanComponent } from './components/tilsan/tilsan.component';

const routes: Routes = [ 
  {path:'', component: LandingComponent},
  {path:'about', component:LandingComponent},
  {path:'tilcara-sanfrancisco', component:TilsanComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
