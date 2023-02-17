import { TestBed } from '@angular/core/testing';

import { SecuritykcService } from './securitykc.service';

describe('SecuritykcService', () => {
  let service: SecuritykcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SecuritykcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
