import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  madeLogin = false;

  constructor() { }

  login(login){
    console.log(this.madeLogin)
    this.madeLogin = login;  
  }

  submitLogin() {
    console.log(this.madeLogin)
    return this.madeLogin;
  }

}