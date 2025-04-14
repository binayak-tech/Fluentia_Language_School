import { CommonModule } from '@angular/common';
import { Component, EventEmitter, HostListener, Output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Language } from '../../../models/Language.model';
import { LanguageService } from '../../../services/language-service';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  isScrolled = false;
  isMobileMenuOpen = false;
  activeDropdown: string | null = null;
  languages: Language[] = [];

  @Output() openForm = new EventEmitter<void>();

  constructor(private languageService: LanguageService) {}
  ngOnInit(): void {
    this.languageService.getAllLanguages().subscribe(languages => {
      this.languages = languages;
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 20;
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    if (this.isMobileMenuOpen) {
      this.activeDropdown = null;
    }
  }

  toggleDropdown(dropdown: string) {
    if (this.activeDropdown === dropdown) {
      this.activeDropdown = null;
    } else {
      this.activeDropdown = dropdown;
    }
  }

  closeDropdowns() {
    this.activeDropdown = null;
  }

  closeMenu() {
    this.isMobileMenuOpen = false;
    this.activeDropdown = null;
  }

  openEnquiryForm() {
    this.openForm.emit();
  }
}
