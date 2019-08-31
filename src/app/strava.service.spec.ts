import { TestBed } from '@angular/core/testing';

import { StravaService } from './strava.service';

describe('StravaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StravaService = TestBed.get(StravaService);
    expect(service).toBeTruthy();
  });
});
