import { TestBed } from '@angular/core/testing';

import { PdGuard } from './pd.guard';

describe('PdGuard', () => {
  let guard: PdGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PdGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
