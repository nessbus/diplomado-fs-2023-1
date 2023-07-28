import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usergateway } from 'src/app/domain/models/User/gateway/usergateway';
import { Token } from 'src/app/domain/models/User/token';
import { User, UserRegister } from 'src/app/domain/models/User/user';
import { environment } from 'src/environments/enrironment';
import { GenericService } from './helpers/generic.service';

@Injectable({
  providedIn: 'root'
})
export class MoreuseUserService extends Usergateway{

  private _url = environment.urlService;
  constructor(private genericService: GenericService ) {
    super();
  }

  login(email: String, password: string): Observable<Token> {
    return this.genericService.post<Token>(this._url,'auth/login', {email: email, password: password})

  }

  register (name: string, email: string, password: string, phone: string, address: string): Observable<UserRegister> {
    return this.genericService.post<UserRegister>(this._url,'auth/signup', {name:name, email: email, password: password, phone,address});
  }
}
