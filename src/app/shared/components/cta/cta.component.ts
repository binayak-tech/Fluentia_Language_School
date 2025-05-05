import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EnquiryFormService } from '../../../services/enquiry-form-service';

@Component({
  selector: 'app-cta',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cta.component.html',
  styleUrl: './cta.component.scss'
})
export class CtaComponent {
  constructor(private enquiryFormService: EnquiryFormService) {}

  openEnquiryForm() {
    this.enquiryFormService.openEnquiryForm();
  }
}