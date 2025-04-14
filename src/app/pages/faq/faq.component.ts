// faq.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Faqs } from '../../data/faq-content';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
  animations: [
    trigger('slideInOut', [
      state('open', style({
        height: '*',
        opacity: 1,
        visibility: 'visible'
      })),
      state('closed', style({
        height: '0',
        opacity: 0,
        visibility: 'hidden'
      })),
      transition('closed => open', [
        animate('300ms ease-in-out')
      ]),
      transition('open => closed', [
        animate('300ms ease-in-out')
      ])
    ])
  ]
})
export class FaqComponent {
  faqs = Faqs;

  toggle(index: number) {
    // Close all other FAQs when one is opened (accordion style)
    if (!this.faqs[index].open) {
      this.faqs.forEach((faq, i) => {
        if (i !== index) {
          faq.open = false;
        }
      });
    }
    
    this.faqs[index].open = !this.faqs[index].open;
  }
}