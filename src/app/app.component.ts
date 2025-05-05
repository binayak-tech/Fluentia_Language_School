import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './layouts/main-layout/navbar/navbar.component';
import { EnquiryFormComponent } from './shared/components/enquiry-form/enquiry-form.component';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './layouts/main-layout/footer/footer.component';

import { Subscription } from 'rxjs';
import { EnquiryFormService } from './services/enquiry-form-service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, EnquiryFormComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, OnDestroy {
  showEnquiryForm = false;
  private subscriptions: Subscription = new Subscription();

  constructor(private enquiryFormService: EnquiryFormService) {}

  ngOnInit() {
    this.subscriptions.add(
      this.enquiryFormService.openForm$.subscribe(() => this.openEnquiryForm())
    );
    this.subscriptions.add(
      this.enquiryFormService.closeForm$.subscribe(() => this.closeEnquiryForm())
    );
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  openEnquiryForm() {
    this.showEnquiryForm = true;
    document.body.classList.add('modal-open');
  }

  closeEnquiryForm() {
    this.showEnquiryForm = false;
    document.body.classList.remove('modal-open');
  }
}