import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { trigger, transition, style, animate } from '@angular/animations';
import { Course } from '../../models/Course.model';
import { CourseService } from '../../services/course-service';
import { Subscription } from 'rxjs';
import { CtaComponent } from '../../shared/components/cta/cta.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
  imports: [CommonModule, CtaComponent],
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
export class CourseComponent implements OnInit {
  courseData: Course | undefined;
  loading = true;
  courseSlug: string = '';
  private subscription: Subscription = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private titleService: Title,
    private metaService: Meta,
    private courseService: CourseService
  ) {}

  ngOnInit(): void {
    this.subscription.add(
      this.route.paramMap.subscribe((params) => {
        this.courseSlug = params.get('course') || '';
        this.loadCourseData();
      })
    );
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  loadCourseData(): void {
    this.loading = true;

    this.subscription.add(
      this.courseService.getCourseBySlug(this.courseSlug).subscribe({
        next: (course) => {
          if (course) {
            this.courseData = course;
            this.updateMetaTags();
          } else {
            this.router.navigate(['/not-found']);
          }
          this.loading = false;
        },
        error: (error) => {
          console.error('Error loading course data:', error);
          this.loading = false;
          this.router.navigate(['/not-found']);
        },
      })
    );
  }

  updateMetaTags(): void {
    if (this.courseData) {
      // Update page title
      this.titleService.setTitle(
        `${this.courseData.name} | Language Learning Center`
      );

      // Update meta tags
      this.metaService.updateTag({
        name: 'description',
        content: this.courseData.description,
      });
      this.metaService.updateTag({
        property: 'og:title',
        content: `${this.courseData.name}`,
      });
      this.metaService.updateTag({
        property: 'og:description',
        content: this.courseData.description,
      });
      this.metaService.updateTag({
        property: 'og:image',
        content: this.courseData.heroImage,
      });
    }
  }

  // Helper method to scroll to a section
  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  get hasDiscount(): boolean {
    return !!this.courseData?.discount;
  }

  get discountPercentage(): number {
    if (this.courseData?.price && this.courseData?.discount) {
      return Math.round(
        ((this.courseData.price - this.courseData.discount) /
          this.courseData.price) *
          100
      );
    }
    return 0;
  }
}
