import { TestBed } from '@angular/core/testing';

import { Route2Service } from './route2.service';

describe('Route2Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Route2Service = TestBed.get(Route2Service);
    expect(service).toBeTruthy();
  });
});
