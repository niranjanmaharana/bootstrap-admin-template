import { Component } from '@angular/core';
import { MenuUtilityService } from './services/menu-utility.service';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular Bootstap Template';
  constructor(public menu: MenuUtilityService, public auth: AuthService) {}

  ngOnInit() {
    this.auth.checkSessionToken();
  }
}
