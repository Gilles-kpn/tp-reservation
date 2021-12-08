import { Reservable } from './../../classes/reservable';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import { AppService } from '../app/app.service';

@Injectable({
  providedIn: 'root'
})
export class ApiReservableService {

  constructor(private query:ApiService) { }

  public all(params:any={ pageSize : 10, pageNumber:1},type:string="classrooms"):Observable<Reservable[]>{
    return this.query.executeRequest(
      'GET',
      'Reservable/'+type,
      undefined,
      undefined,
      params
    )
  }

  public get(id: string):Observable<Reservable>{
    return this.query.executeRequest(
      'GET',
      'Reservable/' +id
    )
  }

  public search(search: string, params: any = { pageSize: 10, pageNumber: 1 }, type: string = "classrooms"): Observable<Reservable[]>{
    params.name = search;
    return this.query.executeRequest(
      'GET',
      'Reservable/' + type + "/search" ,
      undefined,
      undefined,
      params
    )
  }
}
