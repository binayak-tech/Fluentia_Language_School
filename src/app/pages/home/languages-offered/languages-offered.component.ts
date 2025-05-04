import { Component, OnInit, OnDestroy, PLATFORM_ID, Inject, ViewChild, ElementRef } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { interval, Subscription } from 'rxjs';

interface Language {
  name: string;
  flag: string;
  slug: string;
}

@Component({
  selector: 'app-languages-offered',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './languages-offered.component.html',
  styleUrls: ['./languages-offered.component.scss']
})
export class LanguagesOfferedComponent implements OnInit, OnDestroy {
  @ViewChild('carousel') carouselRef!: ElementRef;
  
  languages: Language[] = [
    { name: 'English', flag: 'assets/images/flags/uk.png', slug: 'english' },
    { name: 'French', flag: 'assets/images/flags/france.png', slug: 'french' },
    { name: 'German', flag: 'assets/images/flags/germany.png', slug: 'german' },
    { name: 'Spanish', flag: 'assets/images/flags/spain.png', slug: 'spanish' },
    { name: 'Korean', flag: 'assets/images/flags/south-korea.png', slug: 'korean' },
    { name: 'Japanese', flag: 'assets/images/flags/japan.png', slug: 'japanese' },
    { name: 'Arabic', flag: 'assets/images/flags/uae.png', slug: 'arabic' },
    { name: 'Mandarin', flag: 'assets/images/flags/china.png', slug: 'mandarin' }
  ];
  
  private carouselSubscription?: Subscription;
  
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
  
  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Start carousel animation after a short delay to ensure DOM is ready
      setTimeout(() => {
        this.startCarousel();
      }, 500);
    }
  }
  
  ngOnDestroy(): void {
    if (this.carouselSubscription) {
      this.carouselSubscription.unsubscribe();
    }
  }
  
  private startCarousel(): void {
    const scrollAmount = 1; // pixels to scroll each interval
    const scrollInterval = 30; // milliseconds between each scroll
    
    this.carouselSubscription = interval(scrollInterval).subscribe(() => {
      if (this.carouselRef && this.carouselRef.nativeElement) {
        const carousel = this.carouselRef.nativeElement;
        
        // When reaching the end, reset to beginning
        if (carousel.scrollLeft >= (carousel.scrollWidth - carousel.clientWidth)) {
          carousel.scrollLeft = 0;
        } else {
          carousel.scrollLeft += scrollAmount;
        }
      }
    });
  }
}