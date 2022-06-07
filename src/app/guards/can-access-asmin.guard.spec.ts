import { TestBed } from '@angular/core/testing';

import { CanAccessAsminGuard } from './can-access-asmin.guard';

describe('CanAccessAsminGuard', () => {
  let guard: CanAccessAsminGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanAccessAsminGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
