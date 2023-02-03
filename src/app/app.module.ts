import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimarybuttonComponent } from './components/primarybutton/primarybutton/primarybutton.component';
import { SecondarybuttonComponent } from './components/secondarybutton/secondarybutton/secondarybutton.component';
import { NavbarComponent } from './components/navbar/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimarybuttonComponent,
    SecondarybuttonComponent,
    NavbarComponent,
    LoginComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
