import { IconsService } from 'src/app/services/icons/icons.service';
import { AppService } from './services/app/app.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/auth/login/login.component';
import { MainComponent } from './components/main/main.component';
import { ReservableComponent } from './components/reservable/reservable.component';
import { PlanningComponent } from './components/planning/planning.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ReservationsComponent } from './components/reservations/reservations.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccountComponent } from './components/account/account.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    ReservableComponent,
    PlanningComponent,
    ReservationsComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
    
  ],
  providers: [
    AppService,
    IconsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
