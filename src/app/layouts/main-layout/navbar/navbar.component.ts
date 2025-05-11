import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit, OnDestroy } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Subscription } from 'rxjs';
import { Language } from '../../../models/Language.model';
import { Course } from '../../../models/Course.model';
import { LanguageService } from '../../../services/language-service';
import { EnquiryFormService } from '../../../services/enquiry-form-service';
import { CourseService } from '../../../services/course-service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit, OnDestroy {
  isScrolled = false;
  isMobileMenuOpen = false;
  activeDropdown: string | null = null;
  languages: Language[] = [];
  courses: Course[] = [];
  loading = true;
  private subscriptions: Subscription = new Subscription();

  constructor(
    private enquiryFormService: EnquiryFormService,
    private languageService: LanguageService,
    private courseService: CourseService
  ) {}

  ngOnInit(): void {
    // Load languages
    this.subscriptions.add(
      this.languageService.getAllLanguages().subscribe({
        next: (languages) => {
          this.languages = languages;
        },
        error: (error) => {
          console.error('Error loading languages:', error);
        },
      })
    );

    // Load courses
    this.subscriptions.add(
      this.courseService.getAllCourses().subscribe({
        next: (courses) => {
          this.courses = courses;
          this.loading = false;
        },
        error: (error) => {
          console.error('Error loading courses:', error);
          this.loading = false;
        },
      })
    );
  }

  ngOnDestroy(): void {
    if (this.subscriptions) {
      this.subscriptions.unsubscribe();
    }
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
    this.enquiryFormService.openEnquiryForm();
  }
}
