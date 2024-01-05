import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './components/workerComponents/container/container.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [ 
  { path: 'work', component: ContainerComponent},
  {path:'', component: HomeComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
