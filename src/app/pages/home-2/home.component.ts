import { Component, OnInit, OnDestroy, AfterViewInit, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { Subject, interval } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  private destroy$ = new Subject<void>();

  heroSlides = [
    { imageUrl: '/assets/images/hero/hero-bg-1.jpg' },
    { imageUrl: '/assets/images/hero/hero-bg-2.jpg' },
    { imageUrl: '/assets/images/hero/hero-bg-3.jpg' },
    { imageUrl: '/assets/images/hero/hero-bg-4.jpg' },
    { imageUrl: '/assets/images/hero/hero-bg-5.jpg' }
  ];
  currentHeroSlide = 0;

  languages = [
    { name: 'English', code: 'english', flagUrl: '/assets/images/flags/uk.png' },
    { name: 'French', code: 'french', flagUrl: '/assets/images/flags/france.png' },
    { name: 'German', code: 'german', flagUrl: '/assets/images/flags/germany.png' },
    { name: 'Spanish', code: 'spanish', flagUrl: '/assets/images/flags/spain.png' },
    { name: 'Japanese', code: 'japanese', flagUrl: '/assets/images/flags/japan.png' },
    { name: 'Korean', code: 'korean', flagUrl: '/assets/images/flags/south-korea.png' },
    { name: 'Arabic', code: 'arabic', flagUrl: '/assets/images/flags/uae.png' },
    { name: 'Mandarin', code: 'mandarin', flagUrl: '/assets/images/flags/china.png' }
  ];
  currentLanguageIndex = 0;

  testimonials = [
    {
      name: 'Sarah Johnson',
      course: 'English IELTS Preparation',
      avatarUrl: '/assets/images/testimonials/sarah.jpg',
      text: 'FluentialanguageSchool transformed my English speaking abilities...'
    },
    {
      name: 'Miguel Rodriguez',
      course: 'Business Spanish',
      avatarUrl: '/assets/images/testimonials/miguel.jpg',
      text: 'As a business professional looking to expand into Latin America...'
    },
    {
      name: 'Aisha Patel',
      course: 'French Beginner to Intermediate',
      avatarUrl: '/assets/images/testimonials/aisha.jpg',
      text: 'The teaching methodology here is outstanding!'
    },
    {
      name: 'David Kim',
      course: 'Mandarin for Professionals',
      avatarUrl: '/assets/images/testimonials/david.jpg',
      text: 'Their specialized Mandarin course for business has been instrumental...'
    }
  ];
  currentTestimonial = 0;

  constructor(
    private titleService: Title,
    private metaService: Meta,
    private zone: NgZone
  ) {}

  ngOnInit(): void {
    try {
      this.setSEOMetadata();
      this.initCarousels();
    } catch (error) {
      console.error('Error during ngOnInit:', error);
    }
  }

  ngAfterViewInit(): void {
    // Use if needed for third-party DOM logic
  }

  private setSEOMetadata(): void {
    this.titleService.setTitle('FluentialanguageSchool - Unlock Your Potential Through Language Mastery');
    this.metaService.updateTag({ name: 'description', content: 'Master languages with FluentialanguageSchool...' });
    this.metaService.updateTag({ name: 'keywords', content: 'language school, English courses, IELTS prep...' });
    this.metaService.updateTag({ property: 'og:title', content: 'FluentialanguageSchool - Language Mastery' });
    this.metaService.updateTag({ property: 'og:description', content: 'Learn languages with expert instructors...' });
    this.metaService.updateTag({ property: 'og:image', content: '/assets/images/og-image.jpg' });
    this.metaService.updateTag({ property: 'og:url', content: 'https://fluentiallanguageschool.com' });
  }

  private initCarousels(): void {
    this.zone.runOutsideAngular(() => {
      interval(5000)
        .pipe(takeUntil(this.destroy$))
        .subscribe(() => {
          this.zone.run(() => this.nextHeroSlide());
        });

      interval(5000)
        .pipe(takeUntil(this.destroy$))
        .subscribe(() => {
          this.zone.run(() => this.nextLanguage());
        });

      interval(8000)
        .pipe(takeUntil(this.destroy$))
        .subscribe(() => {
          this.zone.run(() => this.nextTestimonial());
        });
    });
  }

  nextHeroSlide(): void {
    this.currentHeroSlide = (this.currentHeroSlide + 1) % this.heroSlides.length;
  }

  nextLanguage(): void {
    this.currentLanguageIndex = (this.currentLanguageIndex + 1) % this.languages.length;
  }

  prevLanguage(): void {
    this.currentLanguageIndex = (this.currentLanguageIndex - 1 + this.languages.length) % this.languages.length;
  }

  nextTestimonial(): void {
    this.currentTestimonial = (this.currentTestimonial + 1) % this.testimonials.length;
  }

  setTestimonial(index: number): void {
    this.currentTestimonial = index;
    // Manual override – reset is not needed due to RxJS pattern now
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
