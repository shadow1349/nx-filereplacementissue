import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TEST_INJECTION_TOKEN } from '@test-filereplacements/injection-tokens';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'test-filereplacements-components',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './components.component.html',
  styleUrl: './components.component.css',
  providers: [
    {
      provide: TEST_INJECTION_TOKEN,
      useValue: new BehaviorSubject<string>('Hello World'),
    },
  ],
})
export class ComponentsComponent {
  constructor(
    @Inject(TEST_INJECTION_TOKEN) public testToken: BehaviorSubject<string>
  ) {
    // I want this to be TEST 123 from app.config.ts in the test app but it will console log as Hello World.
    console.log('testToken', this.testToken);
  }
}
