import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Clothes } from 'src/app/domain/models/Clothes/clothes';
import { environment } from 'src/environments/enrironment';
import { GenericService } from '../helpers/generic.service';


@Injectable({
  providedIn: 'root'
})
export class MoreuseClothesService {

  private _url = environment.urlService;
  constructor(private genericService:GenericService) { }
  //constructor(private http:HttpClient) { }

  getClothes()
  {
    return this.genericService.get<Clothes[]>(this._url,'clothes')
  }

  // {
  //   return this.http.get<Clothes[]>('http://localhost:3000/auth/login')
  // }
}
