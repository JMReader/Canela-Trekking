import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LongCardComponent } from './components/circuitos/circuits/cards/long-card/long-card.component';
import { CircuitComponent } from './components/circuitos/circuits/circuit/circuit.component';
import { ShowCircuitsComponent } from './components/circuitos/circuits/show-circuits/show-circuits.component';
import { HomeComponent } from './components/circuitos/home/home.component';
import { TilsanComponent } from './components/circuitos/tilsan/tilsan.component';
import { LandingComponent } from './components/landing/landing.component';
import { CarrouselComponent } from './shared/components/carrousel/carrousel.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { SwitchComponent } from './shared/components/switch/switch.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    CircuitComponent,
    ShowCircuitsComponent,
    FooterComponent,
    TilsanComponent,
    LandingComponent,
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
