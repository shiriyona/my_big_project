import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  madeLogin = false;
  userImg: '../../../../assets/img/icon_user.png';
  userLogin = "";

  constructor() {
  }

  onInit() { }

  login(login) {
    console.log(this.madeLogin)
    this.madeLogin = login;
  }

  // clickCounter() {
  //   localStorage.madeLogin = true;
  //   localStorage.setItem(this.userLogin, "true");
  //   document.getElementById("demo").innerHTML = localStorage.madeLogin;
  // }

  submitLogin() {
    console.log(this.madeLogin)
    return this.madeLogin;
  }

  // clickCounter() {
  //   if (localStorage.madeLogin === true) {
  //     localStorage.madeLogin = (localStorage.madeLogin = true);
  //   document.getElementById("demo").innerHTML = localStorage.madeLogin;
  // }

}