
import { Injectable } from "@angular/core";
import { Usergateway } from "../gateway/usergateway";

//el injectable es para poder usar esta clase en otros modulos
@Injectable({
  providedIn: 'root'
})

export class Userusecase {
  constructor(private _usergateway: Usergateway){}
  login(email: string, password: string): any {
//Aqui aplicamos la logica de la aplicacion (app)
    return this._usergateway.login(email,password);

  }

  register (name:string, email:string, password:string, phone: string, address: string): any {
    return this._usergateway.register(name, email, password, phone, address);
  }
}
