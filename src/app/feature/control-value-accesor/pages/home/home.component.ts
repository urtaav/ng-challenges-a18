import { Component } from '@angular/core';
import { FeedbackFormComponent } from '../feedback-form/feedback-form.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FeedbackFormComponent],
  template: `
    <app-feedback-form  (feedBackSubmit)="apiCall($event)"/>
  `,
  styles: ``
})
export class HomeComponent {
  apiCall(event: Record<string, string | null>): void {
    console.log(event);
  }
}
