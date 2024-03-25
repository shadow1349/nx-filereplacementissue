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
})
export class ComponentsComponent {
  constructor(
    @Inject(TEST_INJECTION_TOKEN) public testToken: BehaviorSubject<string>
  ) {
    console.log('testToken', this.testToken);
  }
}
