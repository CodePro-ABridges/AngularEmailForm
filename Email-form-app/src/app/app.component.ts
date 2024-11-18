import { Component } from '@angular/core';
import { EmailFormComponent } from './components/email-form/email-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [EmailFormComponent],
  template: `<app-email-form></app-email-form>`,
})
export class AppComponent {}
