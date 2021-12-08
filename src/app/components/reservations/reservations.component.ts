import { Reservable } from './../../classes/reservable';
import { Router, ActivatedRoute } from '@angular/router';
import { Reservation } from './../../classes/reservation';
import { ApiReservableService } from './../../services/api/api-reservable.service';
import { ApiReservationService } from './../../services/api/api-reservation.service';
import { IconsService } from 'src/app/services/icons/icons.service';
import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app/app.service';
import { finalize } from 'rxjs';
import { ToastService } from 'src/app/services/app/toast.service';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.scss']
})
export class ReservationsComponent implements OnInit {
  reservations: Reservation[] = [];
  loading: boolean = false;
  reserving:boolean = false;
  reservable: Reservable | undefined;
  week:Date[] = [];

  constructor(public icons: IconsService,private toast:ToastService, private app:AppService, private reservation: ApiReservationService, private reservableService: ApiReservableService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(p => {
      this.loading = true;
      this.getReservable(p['id'])
    })
    //init from now date
    this.week = this.initWeekFromDate(new Date());
  }


  initWeekFromDate(date: Date):Date[] {
    let week = [];
    for (let i = 0; i < 7; i++) {
      week.push(new Date(date.getTime() + i * 24 * 60 * 60 * 1000));
    }
    return week;
  }

  findreservationsOfDate(date: Date): Reservation[] {
    return this.reservations.filter(r => new Date(r.startDate).getDay() == date.getDay());
  }

  getReservable(reservableId: string) {
    this.reservableService.get(reservableId).subscribe(reservable => {
      if (reservable) {
        this.reservable = reservable;
        this.getReservationsAbout(reservable.id);
      }
    })
  }

  reserve(value:any){
    if(value.startDate < value.endDate){
      this.reserving = true;
      if (this.reservable) {
        this.reservation.reserve(this.reservable.id, value).pipe(finalize(() => {
          this.reserving = false;
        })).subscribe(reservation => {
          //@ts-ignore
          reservation.professor = this.app.getUser()
          this.reservations.push(reservation);
        })
      }
    }else{
      this.toast.showError("La date de début doit être antérieure à la date de fin", "Erreur");
    }
    
  }

  getReservationsAbout(reservableId: string) {
    this.reservation.reservableReservations(reservableId).subscribe(reservations => {
      this.reservations = reservations;
      this.loading = false;
    })
  }

  delete(reservation: Reservation) {
    this.reservation.delete(reservation.id).subscribe(() => {
      this.reservations = this.reservations.filter(r => r.id != reservation.id);
    })
  }

  isCreator(reservation: Reservation): boolean {
    return reservation.professor.id == this.app.getUser()?.id;
  }



}
