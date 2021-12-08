import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AppNavigatorService {

  constructor(private router:Router) { }

  navigateTo(url:string, params:any = {}) {
    this.router.navigate([url], {
      queryParams:params
    });
  }
}
