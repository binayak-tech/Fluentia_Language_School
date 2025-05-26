import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { EnquiryFormService } from '../../../services/enquiry-form-service';

@Component({
  selector: 'app-enquiry-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './enquiry-form.component.html',
  styleUrl: './enquiry-form.component.scss',
})
export class EnquiryFormComponent {
  enquiryForm: FormGroup;
  submitted = false;
  success = false;
  error = ''; // You can add an error state if needed for UI feedback

  languages = [
    'Spoken English',
    'IELTS',
    'Interview Prep',
    'Spanish',
    'French',
    'German',
    'Italian',
    'Mandarin',
    'Japanese',
    'Korean',
  ];

  constructor(
    private fb: FormBuilder,
    private enquiryFormService: EnquiryFormService
  ) {
    this.enquiryForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      language: ['Spoken English', [Validators.required]],
      level: ['Beginner', [Validators.required]],
      message: ['', []],
      demo: [false, []],
      consent: [false, [Validators.requiredTrue]],
    });
  }

  // Helper to access form controls easily in the template
  get f() {
    return this.enquiryForm.controls;
  }

  close() {
    this.enquiryFormService.closeEnquiryForm();
  }

  onSubmit() {
    this.submitted = true;
    this.error = ''; // Clear any previous error messages

    if (this.enquiryForm.valid) {
      // Netlify will automatically handle the form submission
      console.log(
        'Form data submitted (Netlify will process):',
        this.enquiryForm.value
      );

      // Simulate a successful submission for UI feedback
      setTimeout(() => {
        this.success = true;
        setTimeout(() => {
          this.enquiryForm.reset();
          this.submitted = false;
          this.success = false;
          this.close();
        }, 3000);
      }, 1000);
    } else {
      // Handle form validation errors if needed for UI
      console.log('Form is invalid');
      // You might want to set an error state here to display a message to the user
      // this.error = 'Please correct the form errors.';
    }
  }
}
