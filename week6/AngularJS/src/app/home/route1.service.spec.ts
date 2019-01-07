import { TestBed } from '@angular/core/testing';

import { Route1Service } from './route1.service';

describe('Route1Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Route1Service = TestBed.get(Route1Service);
    expect(service).toBeTruthy();
  });
});
