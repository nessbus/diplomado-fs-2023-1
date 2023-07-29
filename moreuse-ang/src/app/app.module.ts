import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultModule } from './UI/layouts/default/default.module';
import { SharedModule } from './UI/shared/shared.module';
import { FullscreenModule } from './UI/layouts/fullscreen/fullscreen.module';
import { Usergateway } from './domain/models/User/gateway/usergateway';
import { MoreuseUserService } from './infraestructure/dirven-adapter/services/moreuse-user.service';
import { ClothesGateway } from './domain/models/Clothes/gateway/clothesgateway';
import { MoreuseClothesService } from './infraestructure/dirven-adapter/services/moreuse-clothes/moreuse-clothes.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './infraestructure/dirven-adapter/services/helpers/authInterceptor';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DefaultModule,
    FullscreenModule,
    SharedModule,
    HttpClientModule


  ],
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass:AuthInterceptor,multi:true},
    {provide:ClothesGateway, useClass: MoreuseClothesService},
    {provide:Usergateway, useClass: MoreuseUserService}],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }


