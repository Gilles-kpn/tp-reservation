import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, of, map, Observable } from 'rxjs';
import { AppService } from '../app/app.service';
import { ToastService } from '../app/toast.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private API_BASE_URL: string ="https://tp-reservations.azurewebsites.net/api/"
  constructor(private query:HttpClient,private app:AppService,private toast:ToastService) { }


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
      switch(error.status){
        case 500:
          this.toast.showError("Erreur interne du serveur","Erreur")
          break;
        case 401:
          this.toast.showError("Vous n'êtes pas autorisé à effectuer cette action","Erreur")
          break;
        case 400:
          this.toast.showError("Veuillez vérifier les champs","Erreur")
          break;
        case 404:
          this.toast.showError("Cette ressource n'existe pas","Erreur")
          break;
        default:
          this.toast.showError("Une erreur est survenue","Erreur")
          break;
      }
      return ''
  }

  private buildUrl(path:string):string{
    return this.API_BASE_URL+path;
  }
}
