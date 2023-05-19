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
  username: string = "admin1";
  password: string = "123456";
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

  getErrorMessage() {
    // console.warn(this.loginForm.value);
    // console.log(this.loginForm);
    // if (this.loginForm.value.fullName === this.username){
    //   this.correctName = true;
    // }
    // if (this.loginForm.value.password === this.password){
    //   this.correctPassword = true;
    // }
    // if (this.loginForm.invalid) {
    //   return 'You must enter a value';
    // }
    // else if (this.loginForm.value.fullName === this.username && this.loginForm.value.password === this.password){
    //   this.madeLogin = true
    // }
    // return this.loginForm.hasError('fullName') ? 'Not a valid email' : '';
  }

  submit() {
    // if (this.madeLogin === true) {
    console.log("user name is " + this.username);
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
    this.username = "";
    this.password = "";
    this.show = true;
  }
}
