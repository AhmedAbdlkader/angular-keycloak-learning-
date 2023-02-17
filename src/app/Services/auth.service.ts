import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';
import { SecuritykcService } from './securitykc.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  constructor(private sec:SecuritykcService , private keyloack : KeycloakService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const requiredRole = route.data['role'];
    const hasRole = this.sec.AllRoles()?.includes(requiredRole)
     if (hasRole)
     {
      return true;
     }
     else
     alert("you Are not Allowd Nigga !! ")
     return false;
  }
}
