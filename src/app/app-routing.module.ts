import { RoleGuard } from './guards/role.guard';
import { ReservationsComponent } from './components/reservations/reservations.component';
import { PlanningComponent } from './components/planning/planning.component';
import { ReservableComponent } from './components/reservable/reservable.component';
import { LoginComponent } from './components/auth/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { MetaGuard } from './guards/meta-guard.guard';

const routes: Routes = [
  {
    path:"login",
    component:LoginComponent,
    canActivate:[MetaGuard],
    data:{
      auth:false
    },
  },
  {
    path:"",
    canActivate:[MetaGuard],
    data:{
      auth:true,
    },
    component:MainComponent,
    children:[
      {
        path:"reservable/:type",
        component:ReservableComponent,
        canActivate:[RoleGuard],
        data:{
          roles:[1,2]
        }
      },
      {
        path:"planning",
        component:PlanningComponent,
        canActivate: [RoleGuard],
        data: {
          roles: [0,1, 2]
        }
      },
      {
        path:"reservation/:id",
        component:ReservationsComponent,
        canActivate:[RoleGuard],
        data:{
          roles:[1,2]
        }
      },
      {
        path:"",
        redirectTo:"planning",
        pathMatch:"full"
        
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
