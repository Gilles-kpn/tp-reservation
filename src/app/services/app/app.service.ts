import { User } from './../../classes/user';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private user: User | undefined;

  constructor() { }

  public store() {
    sessionStorage.setItem('user', this.encrypt(JSON.stringify(this.user)));
  }

  public retrieve() {
    let temp = sessionStorage.getItem('user');
    if (temp) {
      this.user = JSON.parse(this.decrypt(temp));
    }
  }

  public getUser(): User | undefined {
    if(!this.user) this.retrieve()
    return this.user
  }

  public isAuthenticated(): boolean {
    return this.getUser() !== undefined;
  }

  public setUser(user: User) {
    this.user = user;
    this.store();
  }


  private encrypt(data: any) {
    return btoa(data);
  }

  private decrypt(data: any) {
    return atob(data);
  }

  public removeUser() {
    this.user = undefined;
    sessionStorage.removeItem('user');
  }
}
