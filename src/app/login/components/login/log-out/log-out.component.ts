import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/login/services/login.service';

@Component({
  selector: 'app-log-out',
  templateUrl: './log-out.component.html',
  styleUrls: ['./log-out.component.css']
})
export class LogOutComponent implements OnInit {
  madeLogin = true;

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  submit() {
    this.madeLogin = false;
    this.loginService.login(this.madeLogin)
  }

}
