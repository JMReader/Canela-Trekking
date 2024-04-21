import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/layouts/header/header.component';
import { CircuitComponent } from './components/circuits/circuit/circuit.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { LandingComponent } from './landing/landing.component';
import { FormsModule } from '@angular/forms';
import { TilsanComponent } from './components/tilsan/tilsan.component';
import { ShowCircuitsComponent } from './components/circuits/show-circuits/show-circuits.component';
import { CarrouselComponent } from './components/utils/carrousel/carrousel.component';
import { SwitchComponent } from './components/utils/switch/switch.component';
import { LongCardComponent } from './components/circuits/cards/long-card/long-card.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    CircuitComponent,
    FooterComponent,
    TilsanComponent,
    LandingComponent,
    ShowCircuitsComponent,
    CarrouselComponent,
    SwitchComponent,
    LongCardComponent
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
