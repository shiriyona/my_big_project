import { Injectable } from '@angular/core';
import { User } from '../models/login.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  users: User[] = [];
  madeLogin = false;
  userImg: '../../../../assets/img/icon_user.png';
  loginBackgroundImg: '../../../../assets/img/water-background.jpg';
  currentUser: User;
  currentUserRole;
  role: boolean;

  constructor() {
  }

  onInit() { }

  onLogin(user: User): Observable<any>{
    this.users = USER_MOCK_DATA;
    for (let i in this.users) {
      if (this.users[i].userName === user.userName && this.users[i].password === user.password) {
        this.madeLogin = true;
        localStorage.setItem("loggenIn", 'true');
        this.currentUser = this.users[i]
        this.currentUserRole = this.users[i].role
        return of(this.currentUserRole);
      }    
    } 
    localStorage.setItem("loggenIn", 'false');
    this.madeLogin = false;
    this.currentUser = null;
    return of(null);
  }

  sendCurrentRole(): Observable<any>{
    return of(this.currentUserRole);
  }

  onRole(role: boolean) {
    this.role = role;
  }

  isLoggedIn() {
    return this.role;
  }

  checkLogin() {
    if (localStorage.getItem('loggenIn') === 'true') {
      this.madeLogin = true;
    } else {
      this.madeLogin = false;
    }
  }

  logout () {
    this.madeLogin = false;
    localStorage.setItem("loggenIn", this.madeLogin + '');
  }

  submitLogin() {
    console.log(this.madeLogin)
    return this.madeLogin;
  }

}