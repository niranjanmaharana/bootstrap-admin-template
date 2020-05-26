import { TestBed } from '@angular/core/testing';

import { MenuUtilityService } from './menu-utility.service';

describe('MenuUtilityService', () => {
  let service: MenuUtilityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuUtilityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
