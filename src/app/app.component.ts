import { Component } from '@angular/core';
import { LoginService } from './login/services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-big-project';
  loadedFeature = 'recipe';
  madeLogin = false;

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.checksLogin();
  }

  checksLogin() {
    console.log(this.madeLogin);
    this.madeLogin = this.loginService.submitLogin();
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }

}
