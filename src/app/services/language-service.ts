// services/language.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Language } from '../models/Language.model';
import { Languages } from '../data/languages';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  languages: Language[] = [];

  constructor() {
    this.languages = Languages;
  }

  getLanguageBySlug(slug: string): Observable<Language | undefined> {
    const language = this.languages.find((lang) => lang.slug === slug);
    return of(language);
  }

  getAllLanguages(): Observable<Language[]> {
    return of(this.languages);
  }
}
