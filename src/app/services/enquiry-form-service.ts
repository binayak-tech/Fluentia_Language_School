import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnquiryFormService {
  private openFormSource = new Subject<void>();
  private closeFormSource = new Subject<void>();

  openForm$ = this.openFormSource.asObservable();
  closeForm$ = this.closeFormSource.asObservable();

  openEnquiryForm() {
    this.openFormSource.next();
  }

  closeEnquiryForm() {
    this.closeFormSource.next();
  }
}