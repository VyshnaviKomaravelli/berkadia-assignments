import { TestBed } from '@angular/core/testing';

import { AirQualityServiceService } from './air-quality-service.service';

describe('AirQualityServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AirQualityServiceService = TestBed.get(AirQualityServiceService);
    expect(service).toBeTruthy();
  });
});
