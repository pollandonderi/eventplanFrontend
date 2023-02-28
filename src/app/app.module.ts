import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimarybuttonComponent } from './components/primarybutton/primarybutton/primarybutton.component';
import { SecondarybuttonComponent } from './components/secondarybutton/secondarybutton/secondarybutton.component';
import { NavbarComponent } from './components/navbar/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { CardComponent } from './components/card/card.component';
import { CardseventsComponent } from './components/cardsevents/cardsevents.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { RegisterComponent } from './components/register/register.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { MerchandiseComponent } from './components/merchandise/merchandise.component';
import { WhatexpectedComponent } from './whatexpected/whatexpected.component';
import { GetinspiredComponent } from './getinspired/getinspired.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimarybuttonComponent,
    SecondarybuttonComponent,
    NavbarComponent,
    LoginComponent,
    CardComponent,
    CardseventsComponent,
    FooterComponent,
    HomepageComponent,
    RegisterComponent,
    AboutusComponent,
    MerchandiseComponent,
    WhatexpectedComponent,
    GetinspiredComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
