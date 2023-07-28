import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Clothes } from "../clothes";
import { ClothesGateway } from "../gateway/clothesgateway";


@Injectable ({
  providedIn:'root'
})

export class Clothesusecase{
  constructor (private _clothesGateway: ClothesGateway ) {}
  getClothes(): Observable<Clothes[]> {
    //logica de aplicacion
    return this._clothesGateway.getClothes();
  }

}
