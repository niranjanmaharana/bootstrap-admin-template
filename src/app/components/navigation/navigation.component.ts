import { Component, OnInit } from '@angular/core';
import { MenuUtilityService } from 'src/app/services/menu-utility.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  constructor(public menu: MenuUtilityService) { }

  ngOnInit(): void {
  }
}