import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { TEST_INJECTION_TOKEN } from '@test-filereplacements/injection-tokens';
import { BehaviorSubject } from 'rxjs';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes),
    {
      provide: TEST_INJECTION_TOKEN,
      useValue: new BehaviorSubject<string>('Hello World'),
    },
  ],
};
