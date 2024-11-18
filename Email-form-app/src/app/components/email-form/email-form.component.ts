import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
//Define Component
@Component({
  /*
Template Structure:
  Container Div
    Form Element
      Email Input Group
        Label
        Input Field
        Error Messages Section
      Submit Button
*/
  selector: 'app-email-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="min-h-screen bg-gray-50 flex items-center justify-center">
      <div class="max-w-md w-full p-6 bg-white rounded-lg shadow-md">
        <h2 class="text-2xl font-bold mb-6 text-center text-gray-800">
          Sign Up
        </h2>

        <form [formGroup]="emailForm" (ngSubmit)="onSubmit()" class="space-y-4">
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700"
              >Email Address</label
            >
            <input
              id="email"
              type="email"
              formControlName="email"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 border"
              [class.border-red-500]="isFieldInvalid('email')"
            />

            <!-- Error Messages -->
            <div
              *ngIf="isFieldInvalid('email')"
              class="mt-1 text-sm text-red-500"
            >
              <span *ngIf="emailForm.get('email')?.errors?.['required']">
                Email is required
              </span>
              <span *ngIf="emailForm.get('email')?.errors?.['email']">
                Please enter a valid email address
              </span>
            </div>
          </div>

          <button
            type="submit"
            class="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
            [disabled]="emailForm.invalid"
            [class.opacity-50]="emailForm.invalid"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  `,
})

/*
  Class Structure:
    Properties:

    Constructor:
      FormBuilder
      Create form group with email field
      Validators

    Methods:
      CheckFieldValidity:
        get field
        return conditional

      Function to handleSubmit():
        If Valid
          log form data
          show success message
          clear form after submission.
 */
export class EmailFormComponent {
  emailForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.emailForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }
  isFieldInvalid(fieldName: string): boolean {
    const field = this.emailForm.get(fieldName);
    return field ? field.invalid && (field.dirty || field.touched) : false;
  }

  onSubmit(): void {
    if (this.emailForm.valid) {
      console.log('Form submitted:', this.emailForm.value);
      alert('Form submitted successfully!');
      this.emailForm.reset();
    }
  }
}
/*
  Validation Check:
    Email Field:
      Required Validation
      Email format Validation
      Show errors conditional logic
        if Valid
        else invalid
*/
