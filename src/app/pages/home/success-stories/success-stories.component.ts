import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  quote: string;
  language: string;
}

@Component({
  selector: 'app-success-stories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './success-stories.component.html',
  styleUrls: ['./success-stories.component.scss']
})
export class SuccessStoriesComponent implements OnInit {
  testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Marketing Professional',
      image: 'assets/images/testimonials/testimonial-1.jpg',
      quote: 'The conversational approach at FluentialLanguageSchool helped me achieve fluency in Spanish in just 6 months. I now confidently lead meetings with our Latin American clients.',
      language: 'Spanish'
    },
    {
      id: 2,
      name: 'David Chen',
      role: 'Engineering Student',
      image: 'assets/images/testimonials/testimonial-2.jpg',
      quote: 'The IELTS preparation course was exceptional. The focused practice and personalized feedback helped me score an 8.5, exceeding my university requirements.',
      language: 'English'
    },
    {
      id: 3,
      name: 'Aisha Patel',
      role: 'Travel Blogger',
      image: 'assets/images/testimonials/testimonial-3.jpg',
      quote: 'Learning Japanese at Fluential transformed my travel experiences. The cultural insights alongside language training made a huge difference in connecting with locals.',
      language: 'Japanese'
    }
  ];
  
  currentTestimonialIndex = 0;
  
  ngOnInit(): void {
    this.startTestimonialRotation();
  }
  
  private startTestimonialRotation(): void {
    setInterval(() => {
      this.currentTestimonialIndex = (this.currentTestimonialIndex + 1) % this.testimonials.length;
    }, 5000);
  }
  
  setCurrentTestimonial(index: number): void {
    this.currentTestimonialIndex = index;
  }
  
  getCurrentTestimonial(): Testimonial {
    return this.testimonials[this.currentTestimonialIndex];
  }
}