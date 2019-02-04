import { TestBed } from '@angular/core/testing';

import { RazredService } from './razred.service';

describe('RazredService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RazredService = TestBed.get(RazredService);
    expect(service).toBeTruthy();
  });
});
