import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactusComponent } from './UI/components/contactus/contactus.component';
import { HomeComponent } from './UI/components/home/home.component';
import { LoginComponent } from './UI/components/login/login.component';
import { RegisterComponent } from './UI/components/register/register.component';
import { DefaultComponent } from './UI/layouts/default/default.component';
import { FullscreenComponent } from './UI/layouts/fullscreen/fullscreen.component';
import { DefaultGuard } from './UI/shared/guards/default.guard';

const routes: Routes = [
  {path:'', redirectTo: '/default/home', pathMatch: 'full' }, // Linea para redirigir por defecto a Home
  {
    path:"default", component:DefaultComponent,
    canActivate:[DefaultGuard], //Guardia para verificar si hay sesion iniciada
    children:[
      {path:"home", component:HomeComponent},
      {path:"contact", component:ContactusComponent}
    ]
  },
  {
    path: "fullscreen", component:FullscreenComponent, children: [
      {path:"login", component: LoginComponent},
      {path:"register", component: RegisterComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
