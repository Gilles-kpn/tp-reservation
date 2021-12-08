import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private toastr:ToastrService) { }

  showSuccess(message:string, title:string){
    this.toastr.success(message, title , {
      timeOut: 3000,
      progressBar: true,
      progressAnimation: 'increasing',
      positionClass: 'toast-bottom-right'
    });
  }

  showError(message:string, title:string){
    this.toastr.error(message, title, {
      timeOut: 3000,
      progressBar: true,
      progressAnimation: 'increasing',
      positionClass: 'toast-bottom-right'
    });
  }
}
