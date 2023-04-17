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

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }

  isLoggendIn() {
    return  this.loginService.madeLogin;
  }

}
