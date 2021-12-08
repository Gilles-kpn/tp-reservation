import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, of, map, Observable } from 'rxjs';
import { AppService } from '../app/app.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private API_BASE_URL: string ="https://tp-reservations.azurewebsites.net/api/"
  constructor(private query:HttpClient,private app:AppService) { }


  public  executeRequest(
    method: string,
    url: string,
    data: any = undefined,
    headers: any = { 'Content-type': 'application/json' },
    params: any = {},
  ) :Observable<any>{
    if(this.app.isAuthenticated())
      headers['Authorization'] = this.app.getUser()?.token
    return this.query.request<Object>(method, this.buildUrl(url), {
        body: data,
        headers: headers,
        params: params,
      }).pipe(
        catchError(error => {
          return this.handleError(error);
        })
      );
  }

  private handleError(error:any):string{
      console.log(error.message);
      return ''
  }

  private buildUrl(path:string):string{
    return this.API_BASE_URL+path;
  }
}
