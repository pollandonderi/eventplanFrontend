import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar/navbar.component';
import { CardComponent } from './components/card/card.component';
import { CardseventsComponent } from './components/cardsevents/cardsevents.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { WhatexpectedComponent } from './whatexpected/whatexpected.component';
import { GetinspiredComponent } from './getinspired/getinspired.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardComponent,
    CardseventsComponent,
    FooterComponent,
    HomepageComponent,
    AboutusComponent,
    WhatexpectedComponent,
    GetinspiredComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
