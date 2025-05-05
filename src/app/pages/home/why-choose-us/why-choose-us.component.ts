import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OUR_FEATURES } from '../../../data/why-choose-us-content';

@Component({
  selector: 'app-why-choose-us',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './why-choose-us.component.html',
  styleUrls: ['./why-choose-us.component.scss']
})
export class WhyChooseUsComponent {
  features = OUR_FEATURES;
}