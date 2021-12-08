import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AppNavigatorService } from '../services/app/app-navigator.service';
import { AppService } from '../services/app/app.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  constructor(private app: AppService, private navigator: AppNavigatorService) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const required = route.data;
    if(required['roles'].includes(this.app.getUser()?.status)) {
      return true;
    }else{
      this.navigator.navigateTo('/planning');
      return false;
    }
  }
  
}
