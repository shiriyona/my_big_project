import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  madeLogin = false;
  userImg: '../../../../assets/img/icon_user.png';
  loginBackgroundImg: '../../../../assets/img/water-background.jpg';

  constructor() {
  }

  onInit() { }

  login(login) {
    this.madeLogin = login;
    localStorage.setItem("loggenIn", this.madeLogin + '');
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