import { Component, Inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { ComponentsComponent } from '@test-filereplacements/components';
import {
  provideToken,
  TEST_INJECTION_TOKEN,
} from '@test-filereplacements/injection-tokens';
import { BehaviorSubject } from 'rxjs';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, ComponentsComponent],
  selector: 'test-filereplacements-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [provideToken()],
})
export class AppComponent {
  constructor(@Inject(TEST_INJECTION_TOKEN) token: BehaviorSubject<string>) {
    token.next('HELLO WORLD TEST 123');
  }
}
