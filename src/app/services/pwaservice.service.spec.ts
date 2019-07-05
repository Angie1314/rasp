import { TestBed } from '@angular/core/testing';

import { PwaserviceService } from './pwaservice.service';

describe('PwaserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PwaserviceService = TestBed.get(PwaserviceService);
    expect(service).toBeTruthy();
  });
});
