import { Reservation } from './../../classes/reservation';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiPlanningService {

  constructor(private query:ApiService) { }


  public planning(params:any = {}):Observable<Reservation[]>{
    return this.query.executeRequest(
      'GET',
      'Plannings',
      undefined,
      undefined,
      params
    )
  }
}
