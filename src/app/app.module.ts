import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { CircuitComponent } from './components/circuitos/circuit/circuit.component';
import { ShowCircuitsComponent } from './components/circuitos/show-circuits/show-circuits.component';
import { TilsanComponent } from './components/circuitos/tilsan/tilsan.component';
import { LandingComponent } from './components/landing/landing.component';
import { CarrouselComponent } from './shared/components/carrousel/carrousel.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { SwitchComponent } from './shared/components/switch/switch.component';
import { LongCardComponent } from './components/circuitos/cards/long-card/long-card.component';
import { AboutUsComponent } from './components/about-us/about-us.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CircuitComponent,
    ShowCircuitsComponent,
    FooterComponent,
    TilsanComponent,
    LandingComponent,
    CarrouselComponent,
    SwitchComponent,
    LongCardComponent,
    AboutUsComponent
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
