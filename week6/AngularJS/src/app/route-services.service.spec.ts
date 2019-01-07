import { TestBed } from '@angular/core/testing';

import { RouteServicesService } from './route-services.service';

describe('RouteServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RouteServicesService = TestBed.get(RouteServicesService);
    expect(service).toBeTruthy();
  });
});
