import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RatingControlComponent } from '../../components/rating-control/rating-control.component';

@Component({
  selector: 'app-feedback-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RatingControlComponent
  ],
  template: `
<form
  [formGroup]="feedbackForm"
  class="feedback-form"
  (ngSubmit)="submitForm()">
  <legend class="feedback-form-title">Tell us what you think</legend>
  <input
    class="feedback-form-control"
    [formControl]="feedbackForm.controls.name"
    placeholder="Name"
    type="text" />
  <input
    class="feedback-form-control"
    [formControl]="feedbackForm.controls.email"
    placeholder="Email"
    type="email" />
    <app-rating-control [formControl]="feedbackForm.controls.rating"></app-rating-control>
  <textarea
    class="feedback-form-control"
    [formControl]="feedbackForm.controls.comment"
    placeholder="Сomment text"></textarea>
    <button
    class="feedback-form-submit"
    type="submit"
    [disabled]="feedbackForm.invalid"
  >
    Submit
  </button>
</form>
  `,
  styles: `
  
  :host {
  display: block;
  padding: 20px;
}

.feedback-form {
  display: flex;
  flex-direction: column;
  width: 500px;
  padding: 20px;
  border: 1px solid #000000;
}

.feedback-form-title {
  margin-bottom: 20px;
  font-size: 24px;
}

.feedback-form-control {
  max-height: 200px;
  margin-bottom: 20px;
  padding: 12px 12px 12px 20px;
  border-radius: 0;
  background-color: #fbfbfb;
  color: #3c3c3c;
  font-size: 18px;

  &:focus {
    padding: 10px 10px 10px 18px;
    border: 2px solid #054ada;
    outline: none;
    background: #fff;
  }
}

.feedback-form-submit {
  padding: 10px;
  background-color: #054ada;
  color: #ffffff;
  font-size: 18px;

  &[disabled] {
    background-color: #cccccc;
    color: #ffffff;
  }
}`

})
export class FeedbackFormComponent {
  @Output()
  readonly feedBackSubmit: EventEmitter<Record<string, string | null>> =
    new EventEmitter<Record<string, string | null>>();

  readonly feedbackForm = new FormGroup({
    name: new FormControl('', {
      validators: Validators.required,
    }),
    email: new FormControl('', {
      validators: Validators.required,
    }),
    rating: new FormControl('', {
      validators: Validators.required,
    }),
    comment: new FormControl(),
  });

  submitForm(): void {
    if (this.feedbackForm.valid) {
      this.feedBackSubmit.emit(this.feedbackForm.value);

      this.feedbackForm.reset();
    }
  }
}
