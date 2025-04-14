// language-detail.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { Language } from '../../../models/Language.model';
import { LanguageService } from '../../../services/language-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-language-detail',
  templateUrl: './language-detail.component.html',
  imports: [CommonModule],
  styleUrls: ['./language-detail.component.scss']
})
export class LanguageDetailComponent implements OnInit {
  language!: Language;
  loading = true;
  error = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private languageService: LanguageService,
    private titleService: Title,
    private metaService: Meta
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const languageSlug = params['language'];
      
      // Get language data from service
      this.languageService.getLanguageBySlug(languageSlug)
        .subscribe({
          next: (language) => {
            if (!language) {
              this.router.navigate(['/not-found']);
              return;
            }
            
            this.language = language;
            this.loading = false;
            
            // Update page title and meta tags for SEO
            this.titleService.setTitle(`${language.name} Language Coaching | Your Academy Name`);
            this.metaService.updateTag({ 
              name: 'description', 
              content: `Learn ${language.name} with our expert coaches. Personalized curriculum, flexible schedules, and proven methods.` 
            });
          },
          error: (err) => {
            console.error('Error fetching language:', err);
            this.error = true;
            this.loading = false;
          }
        });
    });
  }
}