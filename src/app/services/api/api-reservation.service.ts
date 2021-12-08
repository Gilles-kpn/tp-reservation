import { Reservation } from './../../classes/reservation';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api/api.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiReservationService {

  constructor(private query:ApiService) { }

  public reservableReservations(id:string):Observable<Reservation[]>{
    return this.query.executeRequest(
      'GET',
      'Reservable/'+id+'/reservations'
    )
  }

  public getReservation(id:number):Observable<Reservation>{
    return this.query.executeRequest(
      'GET',
      'Reservations/'+id
    )
  }

  public deleteReservation(id:number):Observable<any>{
    return this.query.executeRequest(
      'DELETE',
      'Reservations/'+id
    )
  }


  public profReservations(id:number):Observable<Reservation[]>{
    return this.query.executeRequest(
      'GET',
      'Professor/'+id+'/reservations'
    )
  }

  public isAvailable(id:number, startDate:Date, endDate:Date):Observable<any>{
    return this.query.executeRequest(
      'POST',
      'Reservable/'+id+'/available',
      {
        startDate:startDate,
        endDate:endDate
      }
      )
  }

  public reserve(id:string, data:any):Observable<Reservation>{
    return this.query.executeRequest(
      'POST',
      'Reservable/'+id+'/reserve',
      data
      )
  }

  public delete(id:string):Observable<any>{
    return this.query.executeRequest(
      'DELETE',
      'Reservations/'+id
    )
  }
}
