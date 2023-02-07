import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginComponent } from './components/login/login.component';
import { MerchandiseComponent } from './components/merchandise/merchandise.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {
    path: "",
    component:HomepageComponent
  },
  {path: 'login-component',
  component: LoginComponent
},
  {path: 'register',
  component: RegisterComponent
},
  {path: 'aboutus',
  component: AboutusComponent
},
  {path: 'merchandise',
  component:MerchandiseComponent 
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
