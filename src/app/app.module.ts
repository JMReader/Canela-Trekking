import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/layouts/header/header.component';
import { CircuitComponent } from './components/circuit/circuit.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { LandingComponent } from './landing/landing.component';
import { CircuitFormComponent } from './components/workerComponents/circuit-form/circuit-form.component';
import { ContainerComponent } from './components/workerComponents/container/container.component';
import { SideBarComponent } from './components/workerComponents/side-bar/side-bar.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    CircuitComponent,
    FooterComponent,
    LandingComponent,
    CircuitFormComponent,
    ContainerComponent,
    SideBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
