import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { PersonalComponent } from './personal/personal.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about', 
    component: AboutComponent 
  },
  {
    path: 'login', 
    component: LoginComponent 
  },
  {
    path: 'registration', 
    component: RegistrationComponent 
  },
  {
    path: 'contact', 
    component: ContactComponent 
  },
  {
    path: 'services', 
    component: ServicesComponent 
  },
  {
    path: 'personal', 
    component: PersonalComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
