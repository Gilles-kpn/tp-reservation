import { IconsService } from 'src/app/services/icons/icons.service';
import { AppService } from 'src/app/services/app/app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  editable:boolean = false
  constructor(public app:AppService,public icons:IconsService) { }

  ngOnInit(): void {
    console.log(this.app.getUser());
    
  }

  role(){
    switch (this.app.getUser()?.status) {
      case 0:{
        return 'Etudiant'      
      }

      case 1: {
        return 'Professeur'
      }

      case 2: {
        return 'Professeur Responsable'
      }
        
      default:{
        return 'Etudiant'
      }
    }
  }

  isUser(){
    return this.app.getUser()?.status == 0 ;
  }

  sector() {
    switch (this.app.getUser()?.sector) {
      case 0: {
        return 'Genie Logiciel'
      }

      case 1: {
        return 'Internet et Multimedia'
      }

      case 2: {
        return 'Securite Informatique'
      }

      default: {
        return 'Genie Logiciel'
      }
    }
  }



}
