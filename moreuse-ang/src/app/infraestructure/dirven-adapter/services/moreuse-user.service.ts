import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usergateway } from 'src/app/domain/models/User/gateway/usergateway';
import { Token } from 'src/app/domain/models/User/token';
import { User, UserRegister } from 'src/app/domain/models/User/user';

@Injectable({
  providedIn: 'root'
})
export class MoreuseUserService extends Usergateway{

  constructor(private http: HttpClient) {
    super();
  }

  login(email: String, password: string): Observable<Token> {
    return this.http.post<Token>('http://localhost:3000/auth/login', {email: email, password: password})

  }

  register (name: string, email: string, password: string, phone: string, address: string): Observable<UserRegister> {
    return this.http.post<UserRegister>('http://localhost:3000/auth/signup', {name:name, email: email, password: password, phone,address});
  }
}
