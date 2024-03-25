import { InjectionToken } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export const TEST_INJECTION_TOKEN = new InjectionToken<BehaviorSubject<string>>(
  'TEST_INJECTION_TOKEN'
);
