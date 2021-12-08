import { Reservable } from './../../classes/reservable';
import { ApiReservableService } from './../../services/api/api-reservable.service';
import { IconsService } from './../../services/icons/icons.service';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { map } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-reservable',
  templateUrl: './reservable.component.html',
  styleUrls: ['./reservable.component.scss']
})
export class ReservableComponent implements OnInit {
  reservables:Reservable[] = []
  loading=false
  params:any = {
    pageNumber:1,
    pageSize:10,
  }

  constructor(public icons:IconsService, private reservable:ApiReservableService,private route:ActivatedRoute) { 
    
    
  }

  ngOnInit(): void {
    this.route.params.subscribe(p=>{
      this.all(p['type'], false)
    })
  }

  all(type: string, push:boolean = true) {
    this.loading = true
    if(!push)
      this.reservables = []
    this.reservable.all(this.params,type).subscribe(value=>{
      if(push)
        this.reservables.push(...value)
      else
        this.reservables = value
      this.loading = false
    })
  }


  search(value:string){
    this.reservables = []
    this.loading = true
    this.reservable.search(value,this.params,this.route.snapshot.params['type']).subscribe(value=>{
      this.reservables = value
      this.loading = false
    })
  }

}
