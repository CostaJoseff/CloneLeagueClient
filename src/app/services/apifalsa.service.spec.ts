import { TestBed } from '@angular/core/testing';

import { APIFalsaService } from './apifalsa.service';

describe('APIFalsaService', () => {
  let service: APIFalsaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(APIFalsaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
