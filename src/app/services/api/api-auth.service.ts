import { User } from './../../classes/user';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ApiAuthService {

  constructor(private api:ApiService) { }

  public login(data:any):Observable<any>{
    return this.api.executeRequest( 'POST','Auth/login', data)
  }

  public current(token:string):Observable<User>{
    return this.api.executeRequest('GET', 'Account',undefined,{
      "Content-type":"application/json",
      "Authorization":token
    })
  }
}
