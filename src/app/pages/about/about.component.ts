import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { trigger, transition, style, animate } from '@angular/animations';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  imports: [CommonModule],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('0.5s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class AboutComponent implements OnInit {
  activeSection: string = 'staff';
  
  sections = [
    {
      id: 'staff',
      title: 'Our Staff',
      icon: 'fa-users',
      content: `At Fluentia Language School, our faculty consists of highly experienced and certified language trainers dedicated to helping students achieve their learning goals. Many of our teachers hold TEFL, CELTA, or other internationally recognized qualifications and have years of experience in language instruction. They bring practical expertise into the classroom, making learning engaging and applicable to real-world situations. Our teachers focus on student-centered learning, ensuring that every learner gains confidence and fluency through an interactive and supportive environment.`
    },
    {
      id: 'teach',
      title: 'How We Teach',
      icon: 'fa-chalkboard-teacher',
      content: `At Fluentia Language School, we believe in a dynamic, communicative, and immersive teaching approach that enhances both language proficiency and confidence. Our lessons are designed to be interactive, incorporating real-life scenarios, role-plays, discussions, and engaging activities to make learning enjoyable and effective. While we utilize modern technology as a supporting tool, our focus remains on live interaction and active participation. Our methodology encourages students to think, speak, and express themselves naturally, preparing them for both academic and professional success.`
    },
    {
      id: 'test',
      title: 'Level Test',
      icon: 'fa-tasks',
      content: `Before enrollment, we conduct a diagnostic test to ensure that each student is placed in the right learning group. This test evaluates grammar, vocabulary and speaking skills, helping us customize the learning experience according to individual needs. Our interactive level test ensures that students receive personalized guidance, allowing them to progress at their own pace in a comfortable and encouraging learning environment.`
    }
  ];

  constructor(private titleService: Title) {}

  ngOnInit(): void {
    this.titleService.setTitle('About Us | Fluentia Language School');
  }

  setActiveSection(sectionId: string): void {
    this.activeSection = sectionId;
  }

  isActive(sectionId: string): boolean {
    return this.activeSection === sectionId;
  }
}