import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

//@injectable propiedad que le indica al sistema que desde la raiz del proyecto
// puede usar canactivate en todos los modulos, heredado (es como hacerla publica en todo el proyecto)
@Injectable ({
  providedIn:'root'
})

export class DefaultGuard implements CanActivate {
  constructor(public router:Router){
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

    if (localStorage.getItem('token')){

      return true;
    } else {
      this.router.navigate(['/fullscreen/login'])
      return false;
    }
  }

}
