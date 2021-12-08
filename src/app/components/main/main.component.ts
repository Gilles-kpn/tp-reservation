import { AppNavigatorService } from './../../services/app/app-navigator.service';
import { faGoogle, faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faSearch, faSignOutAlt, faUserCircle, faHome, faTools, faTasks, faCalendar } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { Component, OnInit } from '@angular/core';
import { IconsService } from 'src/app/services/icons/icons.service';
import { AppService } from 'src/app/services/app/app.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {


  constructor(public icons:IconsService,private app:AppService, private navigator:AppNavigatorService) { }

  ngOnInit(): void {
  }

  logout(){
    this.app.removeUser()
    this.navigator.navigateTo("login")
  }

  showLinks(roles: number[]):boolean{
    //@ts-ignore
    return roles.includes(this.app.getUser()?.status)? true:false
  }

}
