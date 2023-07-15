import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { HomeComponent } from '../../components/home/home.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactusComponent } from '../../components/contactus/contactus.component';



@NgModule({ //importacion de los modulos
  declarations: [
    DefaultComponent,
    HomeComponent,
    ContactusComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule, // archivo que se encarga de gestionar rutas
    SharedModule,
    ReactiveFormsModule // para trabajar con formularios reactivos
  ]
})
export class DefaultModule { }
