import { Component, OnInit } from '@angular/core';
import { MenuUtilityService } from 'src/app/services/menu-utility.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(public menu: MenuUtilityService, public auth: AuthService) {}

  ngOnInit(): void {
  }
}
