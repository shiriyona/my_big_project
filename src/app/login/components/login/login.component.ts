import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username : string ="";
password : string ="";
show: boolean= false;
makeLogin=false

  constructor() { }

  ngOnInit(): void {
  }

  submit(){
  console.log("user name is " + this.username)
  this.makeLogin=true
  this.clear();
  }

  clear(){
  this.username ="";
  this.password = "";
  this.show = true;
}
}
