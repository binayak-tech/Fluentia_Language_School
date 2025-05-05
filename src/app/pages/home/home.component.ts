import { Component, Inject, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { LanguagesOfferedComponent } from './languages-offered/languages-offered.component';
import { SuccessStoriesComponent } from './success-stories/success-stories.component';
import { VisionSectionComponent } from './vision-section/vision-section.component';
import { WhyChooseUsComponent } from './why-choose-us/why-choose-us.component';
import { CtaComponent } from '../../shared/components/cta/cta.component';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';
import { Subscription, interval } from 'rxjs';
import { RouterModule } from '@angular/router';
import { title } from 'process';
import { HERO_ITEMS } from '../../data/home-hero-items';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    HeroSectionComponent,
    VisionSectionComponent,
    WhyChooseUsComponent,
    LanguagesOfferedComponent,
    SuccessStoriesComponent,
    CtaComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('fadeAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('300ms', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class HomeComponent implements OnInit, OnDestroy {

  heroItems = HERO_ITEMS;
  currentHeroImageIndex = 0;
  private imageRotationSubscription?: Subscription;
  
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
  
  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Only run image rotation in browser context (not during SSR)
      this.imageRotationSubscription = interval(5000).subscribe(() => {
        this.currentHeroImageIndex = (this.currentHeroImageIndex + 1) % this.heroItems.length;
      });
    }
  }
  
  ngOnDestroy(): void {
    if (this.imageRotationSubscription) {
      this.imageRotationSubscription.unsubscribe();
    }
  }
  
  getCurrentHeroItem() {
    return this.heroItems[this.currentHeroImageIndex];
  }
}