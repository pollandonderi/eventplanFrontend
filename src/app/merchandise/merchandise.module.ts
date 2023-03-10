import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MerchandiseRoutingModule } from './merchandise-routing.module';
import { MerchandiseComponent } from './merchandise.component';
import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    MerchandiseComponent
  ],
  imports: [
    CommonModule,
    MerchandiseRoutingModule,
    FontAwesomeModule,
    HttpClientModule
  ]
})
export class MerchandiseModule { }
