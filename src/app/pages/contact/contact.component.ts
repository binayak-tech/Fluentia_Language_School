import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CtaComponent } from '../../shared/components/cta/cta.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, CtaComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  submitted = false;
  success = false;
  loading = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: [
        '',
        [Validators.required, Validators.pattern(/^[0-9+ -]{8,15}$/)],
      ],
      subject: ['', [Validators.required]],
      message: ['', [Validators.required, Validators.minLength(10)]],
      consent: [false, [Validators.requiredTrue]],
    });
  }

  ngOnInit(): void {
    // Initialize any additional functionality
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.contactForm.valid) {
      this.loading = true;

      // Simulate API call with timeout
      setTimeout(() => {
        // In a real app, you would send the form data to a server
        console.log('Form submitted:', this.contactForm.value);

        this.loading = false;
        this.success = true;

        // Reset form after success
        setTimeout(() => {
          this.contactForm.reset();
          this.contactForm.patchValue({
            subject: '', // Set to empty string to show placeholder
          });
          this.submitted = false;
          this.success = false;
        }, 5000);
      }, 1500);
    } else {
      // Scroll to first invalid element
      this.scrollToFirstInvalidControl();
    }
  }

  private scrollToFirstInvalidControl(): void {
    const firstInvalidControl = document.querySelector(
      '.ng-invalid.ng-touched'
    );
    if (firstInvalidControl) {
      firstInvalidControl.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  }

  // Helper method to track form control state
  isInvalidAndTouched(controlName: string): boolean {
    const control = this.contactForm.get(controlName);
    return control
      ? control.invalid && (control.dirty || control.touched || this.submitted)
      : false;
  }
}
