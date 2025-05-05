import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CtaComponent } from "../../shared/components/cta/cta.component";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, CtaComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  submitted = false;
  success = false;
  
  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      subject: ['', [Validators.required]],
      message: ['', [Validators.required]],
      consent: [false, [Validators.requiredTrue]]
    });
  }
  
  ngOnInit(): void {
    // Any initialization logic here
  }
  
  onSubmit(): void {
    this.submitted = true;
    
    if (this.contactForm.valid) {
      // In a real app, you would send this data to a server
      console.log('Contact form submitted', this.contactForm.value);
      
      // Simulate successful submission
      setTimeout(() => {
        this.success = true;
        
        // Reset form after showing success message
        setTimeout(() => {
          this.contactForm.reset();
          this.submitted = false;
          this.success = false;
        }, 3000);
      }, 1000);
    }
  }
}