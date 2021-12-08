import { AppNavigatorService } from './../services/app/app-navigator.service';
import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AppService } from '../services/app/app.service';

@Injectable({
  providedIn: 'root'
})
export class MetaGuard implements CanActivate {

  constructor(private app: AppService, private navigator: AppNavigatorService) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const required = route.data;
    if(required['auth']){
      if(this.app.isAuthenticated()){
        return true;
      }else{
        this.navigator.navigateTo("login")
        return false;
      }
    }else{
      if(this.app.isAuthenticated()){
        this.navigator.navigateTo("")
        return false
      }else{
        return true;
      }
    } 
  }

}
