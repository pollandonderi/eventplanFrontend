import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes,PreloadAllModules } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ShippingComponent } from './shipping/shipping.component';
import { ShopComponent } from './shop/shop.component';

const routes: Routes = [
  {
    path: "",
    component:HomepageComponent
  },
  {path: 'aboutus',
  component: AboutusComponent
},{
path:"shop",
component:ShopComponent
},
{
  path:"cart",
  component:CartComponent
},
{
  path:"shipping",
  component:ShippingComponent
},
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: 'register', loadChildren: () => import('./register/register.module').then(m => m.RegisterModule) },
  { path: 'merchandise', loadChildren: () => import('./merchandise/merchandise.module').then(m => m.MerchandiseModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {
      preloadingStrategy: PreloadAllModules
    }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
