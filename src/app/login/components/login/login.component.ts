import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

username : string ="";
password : string ="";
show: boolean= false;
madeLogin=false

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  submit(){
  console.log("user name is " + this.username)
  console.log(this.madeLogin)
  this.madeLogin = true;
  this.loginService.login(this.madeLogin)
  this.clear();
  }

  clear(){
  this.username ="";
  this.password = "";
  this.show = true;
}
}
