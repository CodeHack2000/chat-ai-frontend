import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { authVipGuard } from './auth-vip.guard';

describe('authVipGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => authVipGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
