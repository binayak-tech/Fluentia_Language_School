import { Course } from '../models/Course.model';

export const COURSE_DATA: Course[] = [
  {
    id: 1,
    slug: 'spoken-english',
    type: 'Language Course',
    name: 'Spoken English',
    title:
      'Master Spoken English with Fluentia – Speak with Confidence, Shine Everywhere!',
    description: `In today’s world, fluent English isn’t a luxury—it’s a necessity. Whether you want to excel in
        your career, study abroad, or engage in global conversations, strong communication skills set
        you apart. At Fluentia Language School, we don’t just teach English—we transform the way
        you speak, think, and express yourself with our Fluentia Unique Method.
        `,
    color: '#4CAF50',
    heroImage: '/assets/images/courses/spoken-english.jpg',
    duration: '8 Weeks',
    level: 'All Levels',
    groupSize: 8,
    price: 299,
    keySkills: [
      {
        icon: 'fa-comments',
        title: 'Everyday Conversation',
        description:
          'Learn to speak fluently in common daily situations and build confidence.',
      },
      {
        icon: 'fa-microphone-alt',
        title: 'Perfect Pronunciation',
        description:
          'Master natural pronunciation and intonation like a native speaker.',
      },
      {
        icon: 'fa-book',
        title: 'Practical Vocabulary',
        description:
          'Expand your vocabulary with useful phrases and expressions.',
      },
      {
        icon: 'fa-users',
        title: 'Group Discussions',
        description:
          'Participate in engaging group activities to practice real conversations.',
      },
    ],
    approach:
      'Our Spoken English course focuses on practical communication skills through immersive speaking activities. We believe in learning by doing, which is why 70% of class time is dedicated to actual conversation practice. Our native-speaking instructors provide personalized feedback to help you overcome speaking anxiety and develop natural fluency.',
    approachImage: '/assets/images/courses/spoken-english-approach.jpg',
    approachFeatures: [
      {
        icon: 'fa-microphone',
        title: 'Speaking-Focused Methodology',
        description:
          'Our classes prioritize speaking time over traditional grammar drills.',
      },
      {
        icon: 'fa-video',
        title: 'Video Recording Analysis',
        description:
          'Record your speaking sessions for detailed instructor feedback on improvement areas.',
      },
      {
        icon: 'fa-headphones',
        title: 'Pronunciation Workshops',
        description:
          'Specialized sessions focused on mastering English sounds and rhythm.',
      },
      {
        icon: 'fa-tasks',
        title: 'Real-life Simulations',
        description:
          "Practice through role-playing real scenarios you'll encounter in everyday life.",
      },
    ],
    curriculum: [
      {
        title: 'Introduction to Spoken English',
        illustration: '/assets/images/courses/spoken-english-intro.jpg',
        topics: [
          'Understanding the Importance of Spoken English',
          'Basic Conversation Starters',
          'Pronunciation Basics',
        ],
      },
      {
        title: 'Everyday Conversations',
        illustration: '/assets/images/courses/spoken-english-everyday.jpg',
        topics: [
          'Ordering Food and Drinks',
          'Shopping Dialogues',
          'Making Small Talk',
        ],
      },
      {
        title: 'Advanced Vocabulary and Expressions',
        illustration: '/assets/images/courses/spoken-english-advanced.jpg',
        topics: [
          'Idiomatic Expressions in Daily Life',
          'Describing Experiences and Emotions',
          'Using Synonyms and Antonyms Effectively',
        ],
      },
    ],
    successStories: [
      {
        name: 'Sarah Johnson',
        title: 'Marketing Professional',
        avatar: '/assets/images/testimonials/sarah.jpg',
        quote:
          'Before this course, I was too nervous to speak English in meetings. Now I confidently lead international calls with clients. The practical approach made all the difference!',
        achievement: 'Promotion to Team Lead',
      },
      {
        name: 'Raj Patel',
        title: 'Software Engineer',
        avatar: '/assets/images/testimonials/raj.jpg',
        quote:
          'The focus on conversation practice rather than just theory helped me become fluent much faster than I expected. I no longer have to think before speaking English.',
        achievement: 'Secured Job Abroad',
      },
    ],
  },
  {
    id: 2,
    slug: 'ielts',
    type: 'Exam Preparation',
    name: 'IELTS Preparation',
    title: 'Achieve Your Dream IELTS Band Score with Fluentia Language School!',
    description: `Your IELTS score can shape your future, opening doors to global education, career
opportunities, and immigration. At Fluentia Language School, we provide a results-driven
IELTS preparation course designed to help you achieve your desired band score with expert
guidance.`,
    color: '#2196F3',
    heroImage: '/assets/images/courses/ielts.jpg',
    duration: '10 Weeks',
    level: 'Intermediate to Advanced',
    groupSize: 10,
    price: 399,
    discount: 349,
    keySkills: [
      {
        icon: 'fa-pencil-alt',
        title: 'Academic Writing',
        description:
          'Master the techniques for Task 1 and Task 2 essays with high-scoring structures.',
      },
      {
        icon: 'fa-headset',
        title: 'Listening Strategies',
        description:
          'Develop active listening skills and techniques to identify key information.',
      },
      {
        icon: 'fa-book-reader',
        title: 'Reading Techniques',
        description:
          'Learn time-saving approaches to tackle different question types effectively.',
      },
      {
        icon: 'fa-microphone',
        title: 'Speaking Confidence',
        description:
          'Build fluency and confidence for the speaking section through targeted practice.',
      },
    ],
    approach:
      'Our IELTS preparation course is designed by certified IELTS examiners who understand exactly what it takes to achieve high band scores. We combine test-taking strategies with language skill development, focusing on your individual needs through regular mock tests and personalized feedback sessions.',
    approachImage: '/assets/images/courses/ielts-approach.jpg',
    approachFeatures: [
      {
        icon: 'fa-chart-line',
        title: 'Diagnostic Assessment',
        description:
          'Begin with a full mock test to identify your strengths and areas for improvement.',
      },
      {
        icon: 'fa-stopwatch',
        title: 'Time Management Training',
        description:
          'Learn efficient techniques to complete each section within the strict time limits.',
      },
      {
        icon: 'fa-clipboard-check',
        title: 'Weekly Mock Tests',
        description:
          'Regular practice under exam conditions with detailed performance analysis.',
      },
      {
        icon: 'fa-trophy',
        title: 'Band Score Improvement',
        description:
          'Targeted exercises to help you increase your score in all four modules.',
      },
    ],
    curriculum: [
      {
        title: 'IELTS Overview and Test Format',
        illustration: '/assets/images/courses/ielts-intro.jpg',
        topics: [
          'Understanding the IELTS Test',
          'Test Format and Scoring',
          'Test Day Tips and Strategies',
        ],
      },
      {
        title: 'Listening Module',
        illustration: '/assets/images/courses/ielts-listening.jpg',
        topics: [
          'Listening for Main Ideas and Details',
          'Identifying Speaker’s Attitude and Opinion',
          'Practice with Real IELTS Listening Tests',
        ],
      },
      {
        title: 'Reading Module',
        illustration: '/assets/images/courses/ielts-reading.jpg',
        topics: [
          'Skimming and Scanning Techniques',
          'Understanding Different Question Types',
          'Practice with Academic and General Reading Passages',
        ],
      },
    ],
    successStories: [
      {
        name: 'Michael Zhang',
        title: 'Graduate Student',
        avatar: '/assets/images/testimonials/michael.jpg',
        quote:
          'I needed a band 7 for my university application but kept scoring 6.5. After this course, I achieved 7.5 overall! The writing strategies were game-changers.',
        achievement: 'Admitted to Oxford University',
      },
      {
        name: 'Aisha Rahman',
        title: 'Healthcare Professional',
        avatar: '/assets/images/testimonials/aisha.jpg',
        quote:
          'The mock tests and detailed feedback helped me identify my weaknesses. I improved from band 6 to band 8 in just two months!',
        achievement: 'Successfully Immigrated to Canada',
      },
    ],
  },
  {
    id: 3,
    slug: 'oet',
    type: 'Medical English',
    name: 'OET Preparation',
    title: 'Achieve Your OET Dream Score with Fluentia Language School!',
    description: `The Occupational English Test (OET) is your gateway to a successful healthcare career
abroad. Whether you're a doctor, nurse, pharmacist, or other medical professional, excelling
in OET ensures smooth registration and employment in English-speaking countries like the
UK, Australia, Canada, and more. At Fluentia Language School, we provide expert-led
training that guarantees a structured, efficient, and result-oriented approach to help you
achieve your desired band score.`,
    color: '#E91E63',
    heroImage: '/assets/images/courses/oet.jpg',
    duration: '12 Weeks',
    level: 'Intermediate to Advanced',
    groupSize: 6,
    price: 499,
    keySkills: [
      {
        icon: 'fa-file-medical',
        title: 'Medical Correspondence',
        description:
          'Master referral letter writing with healthcare-specific templates and vocabulary.',
      },
      {
        icon: 'fa-user-md',
        title: 'Patient Consultation',
        description:
          'Develop communication skills for effective patient interviews and consultations.',
      },
      {
        icon: 'fa-heartbeat',
        title: 'Healthcare Vocabulary',
        description:
          'Build an extensive medical terminology database relevant to your profession.',
      },
      {
        icon: 'fa-clipboard-list',
        title: 'Case Note Analysis',
        description:
          'Learn techniques to extract and process key information from medical case notes.',
      },
    ],
    approach:
      'Our OET preparation course is taught by healthcare professionals with extensive OET examining experience. We focus on the specialized language needs of medical practitioners in real clinical contexts while providing proven strategies to meet the specific requirements of the OET exam.',
    approachImage: '/assets/images/courses/oet-approach.jpg',
    approachFeatures: [
      {
        icon: 'fa-stethoscope',
        title: 'Profession-Specific Training',
        description:
          'Tailored materials for nurses, doctors, dentists, and other healthcare specialties.',
      },
      {
        icon: 'fa-user-nurse',
        title: 'Role-Play Scenarios',
        description:
          'Practice realistic healthcare interactions with trained standardized patients.',
      },
      {
        icon: 'fa-hospital',
        title: 'Workplace Communication',
        description:
          'Focus on professional interactions with colleagues and multidisciplinary teams.',
      },
      {
        icon: 'fa-graduation-cap',
        title: 'Grade B+ Strategies',
        description:
          'Specific techniques aimed at achieving the coveted B+ grade required by most regulatory bodies.',
      },
    ],
    curriculum: [
      {
        title: 'OET Overview and Test Format',
        illustration: '/assets/images/courses/oet-intro.jpg',
        topics: [
          'Understanding the OET Test',
          'Test Format and Scoring',
          'Test Day Tips and Strategies',
        ],
      },
      {
        title: 'Listening Module',
        illustration: '/assets/images/courses/oet-listening.jpg',
        topics: [
          'Listening for Main Ideas and Details',
          'Identifying Speaker’s Attitude and Opinion',
          'Practice with Real OET Listening Tests',
        ],
      },
      {
        title: 'Reading Module',
        illustration: '/assets/images/courses/oet-reading.jpg',
        topics: [
          'Skimming and Scanning Techniques',
          'Understanding Different Question Types',
          'Practice with Medical Reading Passages',
        ],
      },
    ],
    successStories: [
      {
        name: 'Dr. Elena Rodriguez',
        title: 'General Practitioner',
        avatar: '/assets/images/testimonials/elena.jpg',
        quote:
          "As a non-native English speaker, the medical terminology was challenging. This course provided exactly what I needed - healthcare English in practical contexts. I achieved all B's on my first attempt!",
        achievement: 'Medical License in Australia',
      },
      {
        name: 'Samuel Okafor',
        title: 'Registered Nurse',
        avatar: '/assets/images/testimonials/samuel.jpg',
        quote:
          'The writing section was my biggest challenge. The templates and feedback from actual healthcare professionals helped me understand exactly what regulatory bodies are looking for.',
        achievement: 'UK Nursing Registration',
      },
    ],
  },
  {
    id: 4,
    slug: 'business-english',
    type: 'Professional English',
    name: 'Business English',
    title:
      'Ace Your Interviews with Confidence – Fluentia’s Spoken English Course!',
    description: `In today’s competitive world, strong communication skills can make or break your career. At
Fluentia Language School, our Interview Preparation Spoken English Course is designed to
help you speak fluently, answer confidently, and leave a lasting impression in any interview.
Whether you’re a fresher or a professional aiming for career growth, this course will refine
your language, boost your confidence, and enhance your employability.`,
    color: '#9C27B0',
    heroImage: '/assets/images/courses/business-english.jpg',
    duration: '10 Weeks',
    level: 'Intermediate to Advanced',
    groupSize: 8,
    price: 449,
    discount: 399,
    keySkills: [
      {
        icon: 'fa-handshake',
        title: 'Negotiation Skills',
        description:
          'Master persuasive language techniques for successful business negotiations.',
      },
      {
        icon: 'fa-chart-pie',
        title: 'Presentation Delivery',
        description:
          'Develop confidence in presenting data, proposals, and reports professionally.',
      },
      {
        icon: 'fa-envelope-open-text',
        title: 'Professional Correspondence',
        description:
          'Perfect your email and formal business writing for clear communication.',
      },
      {
        icon: 'fa-comments-dollar',
        title: 'Meeting Participation',
        description:
          'Learn effective strategies for contributing to and leading meetings.',
      },
    ],
    approach:
      'Our Business English course simulates real corporate environments through case studies and business simulations. Taught by instructors with corporate backgrounds, the program emphasizes practical business communication skills that employers value, using authentic materials from various industries.',
    approachImage: '/assets/images/courses/business-english-approach.jpg',
    approachFeatures: [
      {
        icon: 'fa-briefcase',
        title: 'Industry-Specific Content',
        description:
          'Customized learning materials relevant to your professional field.',
      },
      {
        icon: 'fa-project-diagram',
        title: 'Business Case Studies',
        description:
          'Analyze and discuss real business scenarios to apply communication skills.',
      },
      {
        icon: 'fa-laptop',
        title: 'Virtual Business Simulation',
        description:
          'Participate in a comprehensive business project from proposal to presentation.',
      },
      {
        icon: 'fa-globe',
        title: 'Cross-Cultural Communication',
        description:
          'Develop awareness of international business etiquette and communication styles.',
      },
    ],
    curriculum: [
      {
        title: 'Introduction to Business English',
        illustration: '/assets/images/courses/business-english-intro.jpg',
        topics: [
          'Understanding Business Communication',
          'Key Vocabulary and Phrases',
          'Cultural Nuances in Business',
        ],
      },
      {
        title: 'Effective Meetings and Negotiations',
        illustration: '/assets/images/courses/business-english-meetings.jpg',
        topics: [
          'Leading and Participating in Meetings',
          'Negotiation Techniques and Strategies',
          'Handling Difficult Conversations',
        ],
      },
      {
        title: 'Professional Presentations',
        illustration:
          '/assets/images/courses/business-english-presentations.jpg',
        topics: [
          'Structuring a Business Presentation',
          'Using Visual Aids Effectively',
          'Handling Q&A Sessions with Confidence',
        ],
      },
    ],
    successStories: [
      {
        name: 'Hiroshi Tanaka',
        title: 'Financial Analyst',
        avatar: '/assets/images/testimonials/hiroshi.jpg',
        quote:
          'This course transformed my professional communication. I now confidently lead international calls and negotiate with clients worldwide. The focus on financial industry terminology was particularly valuable.',
        achievement: 'International Account Manager Promotion',
      },
      {
        name: 'Maria Gonzalez',
        title: 'Marketing Director',
        avatar: '/assets/images/testimonials/maria.jpg',
        quote:
          'The presentation and negotiation skills I gained have directly impacted my career. I recently secured a major international contract using the persuasive language techniques from this course.',
        achievement: 'Expanded Business to Three New Countries',
      },
    ],
  },
  {
    id: 5,
    slug: 'interview-prep',
    type: 'Career Development',
    name: 'Interview Preparation',
    title:
      'Ace Your Interviews with Confidence – Fluentia’s Spoken English Course!',
    description: `In today’s competitive world, strong communication skills can make or break your career. At
Fluentia Language School, our Interview Preparation Spoken English Course is designed to
help you speak fluently, answer confidently, and leave a lasting impression in any interview.
Whether you’re a fresher or a professional aiming for career growth, this course will refine
your language, boost your confidence, and enhance your employability.`,
    color: '#FF9800',
    heroImage: '/assets/images/courses/interview-prep.jpg',
    duration: '4 Weeks',
    level: 'All Levels',
    groupSize: 6,
    price: 349,
    keySkills: [
      {
        icon: 'fa-user-tie',
        title: 'Personal Branding',
        description:
          'Learn to articulate your strengths and experiences with compelling narratives.',
      },
      {
        icon: 'fa-question-circle',
        title: 'Common Questions Mastery',
        description:
          'Develop confident responses to challenging and frequently asked interview questions.',
      },
      {
        icon: 'fa-chalkboard-teacher',
        title: 'Body Language',
        description:
          'Perfect your non-verbal communication to project confidence and professionalism.',
      },
      {
        icon: 'fa-comment-dots',
        title: 'Situational Responses',
        description:
          'Practice the STAR technique for answering behavioral and situational questions.',
      },
    ],
    approach:
      'Our Interview Preparation course combines language coaching with career expertise, offering personalized feedback from HR professionals and industry recruiters. We focus on authentic interview simulations tailored to your target industry, with video analysis to refine both verbal and non-verbal communication.',
    approachImage: '/assets/images/courses/interview-prep-approach.jpg',
    approachFeatures: [
      {
        icon: 'fa-video',
        title: 'Video Interview Practice',
        description:
          'Prepare for modern remote interviewing with recorded practice sessions.',
      },
      {
        icon: 'fa-industry',
        title: 'Industry-Specific Training',
        description:
          'Customize your preparation for your target field with relevant terminology and questions.',
      },
      {
        icon: 'fa-users-cog',
        title: 'Expert Panel Feedback',
        description:
          'Receive evaluation from actual hiring managers and recruiters from your industry.',
      },
      {
        icon: 'fa-brain',
        title: 'Stress Management',
        description:
          'Learn techniques to remain calm and articulate under pressure during interviews.',
      },
    ],
    curriculum: [
      {
        title: 'Communication Foundation',
        illustration: '/assets/images/courses/interview-prep-communication.jpg',
        topics: [
          'Sentense Building',
          'Job-related Vocabulary',
          'Confidence Building Techniques',
        ],
      },
      {
        title: 'Interview Skills',
        illustration: '/assets/images/courses/interview-prep-skills.jpg',
        topics: [
          'Tell Me About Yourself',
          'Strengths and Weaknesses',
          'Why This Company?',
        ],
      },
      {
        title: 'Mock Interviews and Feedback',
        illustration: '/assets/images/courses/interview-prep-mock.jpg',
        topics: [
          'Live Mock Sessions',
          'Personalized Feedback',
          'Accent & Tone Correction',
        ],
      },
    ],
    successStories: [
      {
        name: 'Ahmed Al-Farsi',
        title: 'IT Professional',
        avatar: '/assets/images/testimonials/ahmed.jpg',
        quote:
          'After failing three interviews due to communication issues, I took this course. The mock interviews with tech recruiters were incredibly realistic. Two weeks after completing the course, I received two job offers!',
        achievement: 'Senior Developer Position at International Tech Firm',
      },
      {
        name: 'Lin Chen',
        title: 'Management Consultant',
        avatar: '/assets/images/testimonials/lin.jpg',
        quote:
          "The personalized feedback helped me identify subtle communication issues I wasn't aware of. The techniques for answering case study questions were invaluable for consulting interviews.",
        achievement: 'Secured Role at Top-Tier Consulting Firm',
      },
    ],
  },
];
