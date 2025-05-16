import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Faqs } from '../../data/faq-content';

export interface Faq {
  id: number;
  question: string;
  answer: string;
  open: boolean;
  category: string;
}

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent {
  faqs = Faqs;
}