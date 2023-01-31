import { TestBed } from '@angular/core/testing';

import { AmadeusService } from './amadeus.service';

describe('AmadeusService', () => {
  let service: AmadeusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AmadeusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
