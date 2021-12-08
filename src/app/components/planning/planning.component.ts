import { Reservation } from './../../classes/reservation';
import { ApiPlanningService } from './../../services/api/api-planning.service';
import { IconsService } from 'src/app/services/icons/icons.service';
import { Component, OnInit } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';


@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.scss']
})
export class PlanningComponent implements OnInit {
  reservations:Reservation[] = [];
  defaultdDate:Date = new Date();
  loading:boolean = false;
  constructor(public icons:IconsService, private planningService:ApiPlanningService) { }


  ngOnInit(): void {
    this.getPlanning(this.format(this.getWeekStartAndEndDates(new Date())));
  }

  

  getWeekStartAndEndDates(date:Date){
    if(!date) date = new Date();
    let start = new Date(date);
    let end = new Date(date);
    start.setDate(start.getDate() - start.getDay() +1);
    end.setDate(end.getDate() + (6 - end.getDay())+1);
    return {startDate:start, endDate:end}
  }

  format(dates:any){
      return {startDate:this.formatDate(dates.startDate), endDate:this.formatDate(dates.endDate)}
  }

  getWeekDateBetween(dates:any){
    let start = new Date(dates.startDate);
    let end = new Date(dates.endDate);
    let datesArray = [];
    while(start <= end){
      datesArray.push(this.formatDate(start));
      start.setDate(start.getDate() + 1);
    }
    return datesArray;
  }

  findReservation(date:string, hour:number){
    let reservation = this.reservations.find(reservation => {
      return (new Date(reservation.startDate).getDate() === new Date(date).getDate()) && (new Date(reservation.startDate).getDay() === new Date(date).getDay()) && (new Date(reservation.startDate).getHours() <=  hour && new Date(reservation.endDate).getHours() > hour);
    });
    return reservation;
  }


  getHour(date:string | undefined |Date){
    if(date)
      return new Date(date).getHours();
    return 0;
  }

  getEachHourBetweenHours(start:number, end:number){
    let hours = [];
    for(let i=start; i<end; i++){
      hours.push(i);
    }
    return hours;
  }


   formatDate(date:Date){
    //format date to 'yyyy-mm-ddT00:00:00'
    return date.toISOString().split('T')[0]+'T00:00:00';
  }

  public getPlanning(params:any){
    this.loading = true;
    this.planningService.planning(params).subscribe(res=>{
        this.reservations = res;
        this.loading = false;
    })
  }


  setDate(date:Date | null){
    if(date){
      this.defaultdDate = date;
      this.getPlanning(this.format(this.getWeekStartAndEndDates(date)));
    }
  }

  exportAsPDF(div:HTMLDivElement){
    html2canvas(div).then(canvas => {

      let fileWidth = 208;
      let fileHeight = canvas.height * fileWidth / canvas.width;

      const FILEURI = canvas.toDataURL('image/png')
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight)

      PDF.save('planning.pdf');
    });
  }
}
