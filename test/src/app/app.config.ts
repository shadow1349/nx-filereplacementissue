import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideToken } from '@test-filereplacements/injection-tokens';
import { appRoutes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(appRoutes), provideToken()],
};
