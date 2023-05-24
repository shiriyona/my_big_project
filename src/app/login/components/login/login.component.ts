import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { __values } from 'tslib';
import { User } from '../../models/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  users: User[] = [];
  show: boolean = false;
  madeLogin = false;
  correctName = false;
  correctPassword= false;

  loginForm = new FormGroup({
    fullName: new FormControl('', [Validators.required, Validators.min(4)]),
    password: new FormControl('', [Validators.required, Validators.min(4)]),
  })
  role

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  submit() {
    console.warn(this.loginForm.value);
    // if (this.madeLogin === true) {
    const userName = this.loginForm.value.fullName;
    const userPassword = this.loginForm.value.password;
    const userRole = this.role;
    const user = new User(userName, userPassword, userRole);
    this.loginService.onLogin(user).subscribe((res:User) => {
      //this.user = res;
    })

    // this.loginService.login(this.madeLogin).sub(res => {
    //   this.user = res;
    // });
    // this.loginService.clickCounter();
    this.clear();
    // }
  }

  hide = true;
  get emailInput() { return this.loginForm.get('email'); }
  get passwordInput() { return this.loginForm.get('password'); }  


  clear() {
    this.loginForm.value.fullName = "";
    this.loginForm.value.password = "";
  }
}
