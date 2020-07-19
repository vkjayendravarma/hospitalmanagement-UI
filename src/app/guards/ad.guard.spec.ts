import { TestBed } from '@angular/core/testing';

import { AdGuard } from './ad.guard';

describe('AdGuard', () => {
  let guard: AdGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AdGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
