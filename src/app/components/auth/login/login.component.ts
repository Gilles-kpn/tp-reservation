import { IconsService } from './../../../services/icons/icons.service';
import { User } from './../../../classes/user';
import { AppNavigatorService } from './../../../services/app/app-navigator.service';
import { AppService } from './../../../services/app/app.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiAuthService } from 'src/app/services/api/api-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loading:boolean = false;
  constructor(private auth:ApiAuthService,private app:AppService,private navigator:AppNavigatorService, public icons:IconsService) { }

  ngOnInit(): void {
    console.log(this.app.getUser());
  }

  onSubmit(form:NgForm){
    this.loading = true
    this.auth.login(form.value).subscribe(
      data=>{
        this.auth.current("Bearer "+data.token).subscribe(
          user=>{
            this.loading = false
            user.token = "Bearer "+data.token
            this.app.setUser(user)
            this.navigator.navigateTo("")
          }
        )
      }
    )
  }
}
