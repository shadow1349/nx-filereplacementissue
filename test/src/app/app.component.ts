import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { ComponentsComponent } from '@test-filereplacements/components';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, ComponentsComponent],
  selector: 'test-filereplacements-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
