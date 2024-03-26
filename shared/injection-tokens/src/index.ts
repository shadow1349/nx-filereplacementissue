import { InjectionToken, Provider } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export const TEST_INJECTION_TOKEN = new InjectionToken<BehaviorSubject<string>>(
  'TEST_INJECTION_TOKEN'
);

export const provideToken = (value = 'TEST 123') => {
  const providers: Provider[] = [
    {
      provide: TEST_INJECTION_TOKEN,
      useValue: new BehaviorSubject<string>(value),
    },
  ];
  return providers;
};
