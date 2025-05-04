import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-why-choose-us',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './why-choose-us.component.html',
  styleUrls: ['./why-choose-us.component.scss']
})
export class WhyChooseUsComponent {
  features = [
    {
      image: 'assets/images/whyChooseUs/expert-trainers.jpg',
      title: 'Expert Trainers',
      description: 'Native speakers and certified teachers with years of experience'
    },
    {
      image: 'assets/images/whyChooseUs/interactive-learning.jpg',
      title: 'Interactive Learning',
      description: 'Practical speaking practice that builds real-world communication skills'
    },
    {
      image: 'assets/images/whyChooseUs/affordable-learning.jpg',
      title: 'Affordable & Flexible Learning',
      description: 'In-person and online classes to fit your schedule and learning style'
    },
    {
      image: 'assets/images/whyChooseUs/small-batches.jpg',
      title: 'Small Batches for Maximum Attention',
      description: 'Personalized attention with maximum 8 students per class'
    }
  ];
}