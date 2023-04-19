import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { __values } from 'tslib';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string = "admir1";
  password: string = "123456";
  show: boolean = false;
  madeLogin = false;

  loginForm = new FormGroup({
    fullName: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  })

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  getErrorMessage() {
    console.warn(this.loginForm.value);
    console.log(this.loginForm);
    if (this.loginForm.invalid) {
      return 'You must enter a value';
    }
    else if (this.loginForm.value.fullName === this.username && this.loginForm.value.password === this.password){
      this.madeLogin = true
    }
    return this.loginForm.hasError('email') ? 'Not a valid email' : '';
  }

  submit() {
    if (this.madeLogin === true) {
    console.log("user name is " + this.username);
    this.loginService.login(this.madeLogin);
    // this.loginService.clickCounter();
    this.clear();
    }
  }

  clear() {
    this.username = "";
    this.password = "";
    this.show = true;
  }
}
