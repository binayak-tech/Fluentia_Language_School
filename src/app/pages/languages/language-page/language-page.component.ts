import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';
import { Language } from '../../../models/Language.model';
import { Subscription } from 'rxjs';
import { LanguageService } from '../../../services/language-service';
import { CtaComponent } from '../../../shared/components/cta/cta.component';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-language-page',
  standalone: true,
  imports: [CommonModule, RouterModule, CtaComponent],
  templateUrl: './language-page.component.html',
  styleUrls: ['./language-page.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate(
          '600ms ease-out',
          style({ opacity: 1, transform: 'translateY(0)' })
        ),
      ]),
    ]),
  ],
})
export class LanguagePageComponent implements OnInit, OnDestroy {
  languageSlug: string = '';
  content: Language | undefined;
  loading: boolean = true;
  private subscription: Subscription = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private languageService: LanguageService,
    private titleService: Title,
    private metaService: Meta
  ) {}

  ngOnInit(): void {
    this.subscription.add(
      this.route.paramMap.subscribe((params) => {
        this.languageSlug = params.get('language') || '';
        this.loadLanguageContent();
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  loadLanguageContent(): void {
    this.loading = true;

    this.subscription.add(
      this.languageService.getLanguageBySlug(this.languageSlug).subscribe({
        next: (language) => {
          if (language) {
            this.content = language;
            this.updateMetaTags();
          } else {
            this.router.navigate(['/not-found']);
          }
          this.loading = false;
        },
        error: (error) => {
          console.error('Error loading language data:', error);
          this.loading = false;
          this.router.navigate(['/not-found']);
        },
      })
    );
  }

  updateMetaTags(): void {
    if (this.content) {
      const title = `${this.content.name} | Fluentia Language School`;
      this.titleService.setTitle(title);

      this.metaService.updateTag({
        name: 'description',
        content: this.content.description || '',
      });
      this.metaService.updateTag({
        property: 'og:title',
        content: title,
      });
      this.metaService.updateTag({
        property: 'og:description',
        content: this.content.description || '',
      });
      if (this.content.imageMain) {
        this.metaService.updateTag({
          property: 'og:image',
          content: this.content.imageMain,
        });
      }
    }
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
