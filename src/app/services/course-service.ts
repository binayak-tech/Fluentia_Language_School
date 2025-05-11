// services/course.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Course } from '../models/Course.model';
import { COURSE_DATA } from '../data/course-data';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private courses: Course[] = COURSE_DATA;

  constructor() {}

  getCourseBySlug(slug: string): Observable<Course | undefined> {
    const course = this.courses.find((course) => course.slug === slug);
    return of(course);
  }

  getAllCourses(): Observable<Course[]> {
    return of(this.courses);
  }
}
