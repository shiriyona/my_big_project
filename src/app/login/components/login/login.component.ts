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
  correctLogin = false;
  userName = new FormControl('', [Validators.required]);
  userPassword = new FormControl('', [Validators.required, Validators.min(4)]);

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  getErrorMessage() {
    if (this.userName.hasError('required')) {
      return 'You must enter a value';
    }
    if (this.correctLogin === false) {
      return 'Your userName or password is incorrect';
    }

    return this.userName.hasError('email') ? 'Not a valid email' : '';
  }

  submit() {
    const userName = this.userName.value;
    const userPassword = this.userPassword.value;
    this.loginService.onLogin(userName, userPassword).subscribe((res:User) => {
      //this.user = res;
    })
  this.correctLogin = this.loginService.onchecksLogin()
  if (this.correctLogin === false) {
    return 'Your userName or password is incorrect';
  }

    this.clear();
  }

  hide = true;

  clear() {
    this.userName.clearValidators();
    this.userPassword.clearValidators();
  }
}
