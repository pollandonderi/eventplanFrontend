import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MerchandiseRoutingModule } from './merchandise-routing.module';
import { MerchandiseComponent } from './merchandise.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms'
import { FiltersPipe } from './filters.pipe';


@NgModule({
  declarations: [
    MerchandiseComponent,
    FiltersPipe
  ],
  imports: [
    CommonModule,
    MerchandiseRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule
  ]
})
export class MerchandiseModule { }
