import { TestBed } from '@angular/core/testing';

import { FdGuard } from './fd.guard';

describe('FdGuard', () => {
  let guard: FdGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(FdGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
