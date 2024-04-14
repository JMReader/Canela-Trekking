import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/layouts/header/header.component';
import { CircuitComponent } from './components/circuit/circuit.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { LandingComponent } from './landing/landing.component';
import { FormsModule } from '@angular/forms';
import { TilsanComponent } from './components/tilsan/tilsan.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    CircuitComponent,
    FooterComponent,
    TilsanComponent,
    LandingComponent
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
