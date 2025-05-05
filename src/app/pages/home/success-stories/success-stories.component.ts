import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TESTIMONIAL_CONTENT } from '../../../data/testimonial-content';
import { Testimonial } from '../../../models/Testimonial.model';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-success-stories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './success-stories.component.html',
  styleUrls: ['./success-stories.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('500ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
      transition(':leave', [
        animate('500ms ease-in', style({ opacity: 0, transform: 'translateY(-20px)' })),
      ]),
    ]),
  ],
})
export class SuccessStoriesComponent implements OnInit, OnDestroy {
  testimonials: Testimonial[] = TESTIMONIAL_CONTENT;
  currentTestimonialIndex = 0;
  autoRotateInterval: any;
  autoRotateDelay = 7000; // 7 seconds for better readability
  isAutoRotating = true;
  
  ngOnInit(): void {
    this.startTestimonialRotation();
  }
  
  ngOnDestroy(): void {
    this.stopTestimonialRotation();
  }
  
  private startTestimonialRotation(): void {
    if (this.isAutoRotating) {
      this.autoRotateInterval = setInterval(() => {
        this.nextTestimonial();
      }, this.autoRotateDelay);
    }
  }
  
  private stopTestimonialRotation(): void {
    if (this.autoRotateInterval) {
      clearInterval(this.autoRotateInterval);
    }
  }
  
  // Keep these methods for internal use with keyboard navigation
  nextTestimonial(): void {
    this.stopTestimonialRotation(); // Stop the current interval
    this.currentTestimonialIndex = (this.currentTestimonialIndex + 1) % this.testimonials.length;
    this.startTestimonialRotation(); // Restart the interval
  }
  
  prevTestimonial(): void {
    this.stopTestimonialRotation(); // Stop the current interval
    this.currentTestimonialIndex = (this.currentTestimonialIndex - 1 + this.testimonials.length) % this.testimonials.length;
    this.startTestimonialRotation(); // Restart the interval
  }
  
  setCurrentTestimonial(index: number): void {
    if (index !== this.currentTestimonialIndex) {
      this.stopTestimonialRotation();
      this.currentTestimonialIndex = index;
      this.startTestimonialRotation();
    }
  }
  
  getCurrentTestimonial(): Testimonial {
    return this.testimonials[this.currentTestimonialIndex];
  }
  
  isPrevious(index: number): boolean {
    // Check if this is the previous testimonial
    return (index === this.getPreviousIndex());
  }
  
  isNext(index: number): boolean {
    // Check if this is the next testimonial
    return (index === this.getNextIndex());
  }
  
  private getPreviousIndex(): number {
    return (this.currentTestimonialIndex - 1 + this.testimonials.length) % this.testimonials.length;
  }
  
  private getNextIndex(): number {
    return (this.currentTestimonialIndex + 1) % this.testimonials.length;
  }
  
  pauseRotation(): void {
    this.stopTestimonialRotation();
    this.isAutoRotating = false;
  }
  
  resumeRotation(): void {
    this.isAutoRotating = true;
    this.startTestimonialRotation();
  }
  
  // Add keyboard navigation for accessibility
  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent): void {
    if (event.key === 'ArrowLeft') {
      this.prevTestimonial();
    } else if (event.key === 'ArrowRight') {
      this.nextTestimonial();
    }
  }
}