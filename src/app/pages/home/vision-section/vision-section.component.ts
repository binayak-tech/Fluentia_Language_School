import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vision-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vision-section.component.html',
  styleUrls: ['./vision-section.component.scss']
})
export class VisionSectionComponent {
  visionItems = [
    {
      icon: 'fa-rocket',
      title: 'Our Mission',
      description: 'Empowering individuals to confidently communicate across cultures and borders through effective language skills.'
    },
    {
      icon: 'fa-eye',
      title: 'Our Vision',
      description: 'To be the premier language learning institution that transforms students into global communicators.'
    },
    {
      icon: 'fa-bullseye',
      title: 'Our Goals',
      description: 'To deliver interactive, immersive language education that creates fluent speakers ready for real-world interactions.'
    }
  ];
}