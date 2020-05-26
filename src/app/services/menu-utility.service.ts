import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuUtilityService {
  public isNavCollapsed = false;
  constructor() { }
}