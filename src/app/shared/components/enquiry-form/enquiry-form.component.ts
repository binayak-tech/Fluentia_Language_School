import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-enquiry-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './enquiry-form.component.html',
  styleUrl: './enquiry-form.component.scss'
})
export class EnquiryFormComponent {
  @Output() close = new EventEmitter<void>();
  
  enquiryForm: FormGroup;
  submitted = false;
  success = false;
  
  languages = [
    'English', 'Spanish', 'French', 'German', 
    'Italian', 'Mandarin', 'Japanese', 'Korean'
  ];
  
  constructor(private fb: FormBuilder) {
    this.enquiryForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      language: ['English', [Validators.required]],
      level: ['Beginner', [Validators.required]],
      message: ['', []],
      consent: [false, [Validators.requiredTrue]]
    });
  }
  
  closeForm() {
    this.close.emit();
  }
  
  onSubmit() {
    this.submitted = true;
    
    if (this.enquiryForm.valid) {
      // In a real app, you would send this data to a server
      console.log('Form submitted', this.enquiryForm.value);
      
      // Simulate successful submission
      setTimeout(() => {
        this.success = true;
        
        // Reset form after showing success message
        setTimeout(() => {
          this.enquiryForm.reset();
          this.submitted = false;
          this.success = false;
          this.closeForm();
        }, 3000);
      }, 1000);
    }
  }
}
