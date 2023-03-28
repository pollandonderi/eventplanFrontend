import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopComponent } from '../shop/shop.component';
import { MerchandiseComponent } from './merchandise.component';
const routes: Routes = [
  { path: '', component: MerchandiseComponent },
  {path:"shop",
component:ShopComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MerchandiseRoutingModule { }
