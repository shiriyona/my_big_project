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

  submitLogin() {
    console.log(this.madeLogin)
    return this.madeLogin;
  }

}