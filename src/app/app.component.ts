import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./layouts/main-layout/navbar/navbar.component";
import { EnquiryFormComponent } from './shared/components/enquiry-form/enquiry-form.component';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './layouts/main-layout/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, NavbarComponent, EnquiryFormComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  showEnquiryForm = false;
  openEnquiryForm() {
    this.showEnquiryForm = true;
    document.body.classList.add('modal-open');
  }
  
  closeEnquiryForm() {
    this.showEnquiryForm = false;
    document.body.classList.remove('modal-open');
  }
}
