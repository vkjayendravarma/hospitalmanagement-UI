import { TestBed } from '@angular/core/testing';

import { LdGuard } from './ld.guard';

describe('LdGuard', () => {
  let guard: LdGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LdGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
