import { Course } from '../models/Course.model';

export const COURSE_DATA: Course[] = [
  {
    id: 1,
    slug: 'spoken-english',
    type: 'Language Course',
    name: 'Spoken English',
    title: 'Speak English Fluently with Confidence!',
    description:
      'Master general spoken English, grammar, and real-life communication with expert trainers.',
    heroImage: '/assets/images/courses/spoken-english.jpg',
    duration: '40 Hours',
    level: 'Beginner | Intermediate | Advanced',
    keySkills: [
      {
        icon: 'fa-comments',
        title: 'Speak Confidently',
        description: 'Handle real-life conversations with ease and clarity.',
      },
      {
        icon: 'fa-book',
        title: 'Boost Vocabulary & Grammar',
        description: 'Learn useful words and correct sentence structures.',
      },
      {
        icon: 'fa-microphone',
        title: 'Fluency & Pronunciation',
        description: 'Speak smoothly and sound more natural.',
      },
      {
        icon: 'fa-lightbulb',
        title: 'Express Yourself Clearly',
        description: 'Share your thoughts, emotions, and ideas confidently.',
      },
    ],
    approach: `Our approach blends practical communication, real-life scenarios, 
      and interactive learning to help you overcome hesitation and build natural fluency. 
      With engaging activities like role-plays, debates, and storytelling, you’ll learn not just grammar 
      but the art of confeaking. Our expert trainers ident sppersonalize the learning experience, ensuring you develop clarity, pronunciation, 
      and the ability to express ideas effortlessly.`,
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
        title: 'Spoken English Foundation',
        illustration: '/assets/images/courses/spoken-english-module-1.jpg',
        topics: [
          'Sentence building basics',
          'Everyday vocabulary',
          'Basic grammar essentials',
        ],
      },
      {
        title: 'Practical Communication Skills',
        illustration: '/assets/images/courses/spoken-english-module-2.jpg',
        topics: [
          'Speaking in real-life situations (shopping, travel, greetings, etc.)',
          'Asking and answering questions',
          'Expressing opinions, likes, and dislikes',
        ],
      },
      {
        title: 'Interactive Fluency Training',
        illustration: '/assets/images/courses/spoken-english-module-3.jpg',
        topics: [
          'Role-plays and storytelling',
          'Group discussions',
          'Pronunciation and accent practice',
        ],
      },
    ],
    successStories: [
      {
        name: 'Anshika Sharma',
        title: 'Marketing Professional',
        avatar: '/assets/images/testimonials/girl.jpg',
        quote:
          'Before this course, I was too nervous to speak English in meetings. Now I confidently lead international calls with clients. The practical approach made all the difference!',
        achievement: 'Promotion to Team Lead',
      },
      {
        name: 'Raj Patel',
        title: 'Software Engineer',
        avatar: '/assets/images/testimonials/boy.jpg',
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
    title: 'Crack the IELTS with Confidence!',
    description:
      'Master all four IELTS skills with powerful strategies, fluency coaching & mock tests by certified experts.',
    heroImage: '/assets/images/courses/ielts.jpg',
    duration: '8 Weeks (60 Hours)',
    level: 'Mock Tests + Detailed Feedback',
    keySkills: [
      {
        icon: 'fa-graduation-cap',
        title: 'Master All Skills',
        description:
          'Learn effective strategies for Speaking, Listening, Reading & Writing.',
      },
      {
        icon: 'fa-bullseye',
        title: 'Boost Accuracy',
        description: 'Strengthen your grammar, vocabulary, and fluency.',
      },
      {
        icon: 'fa-clock',
        title: 'Manage Time Well',
        description: 'Structure answers and complete tasks within time.',
      },
      {
        icon: 'fa-check-circle',
        title: 'Practice Smart',
        description: 'Solve real IELTS questions with mock tests.',
      },
    ],
    approach: `Our highly experienced trainers understand the IELTS exam inside out, equipping you with powerful strategies for all 
    four modules—Listening, Reading, Writing, and Speaking. Through interactive sessions, real exam simulations, and personalized 
    feedback, we ensure you master essential skills and build confidence. Our structured program guarantees effective learning,
    time management techniques, and test-taking strategies to maximize your potential. With tailored coaching and continuous assessment,
    we help you identify weaknesses and turn them into strengths.`,
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
        title: 'IELTS Foundation Skills',
        illustration: '/assets/images/courses/ielts-module-1.jpg',
        topics: [
          'Understanding IELTS format & band descriptors',
          'Grammar & vocabulary for IELTS',
          'Building fluency & confidence',
        ],
      },
      {
        title: 'IELTS Speaking Mastery',
        illustration: '/assets/images/courses/ielts-module-2.jpg',
        topics: [
          'Part 1: Introduction & Interview Practice',
          'Part 2: Cue Card Strategies',
          'Part 3: Discussion & Opinion Framing',
        ],
      },
      {
        title: 'IELTS Writing Mastery',
        illustration: '/assets/images/courses/ielts-module-3.jpg',
        topics: [
          'Task 1: Reports & Graphs (Academic) or Letters (General)',
          'Task 2: Essay types & structure',
          'Vocabulary, coherence & grammar improvement',
        ],
      },
      {
        title: 'IELTS Reading & Listening',
        illustration: '/assets/images/courses/ielts-module-4.jpg',
        topics: [
          'Skimming, scanning & question types',
          'Practice with Cambridge-style tests',
          'Accents, tone & audio strategy',
        ],
      },
      {
        title: 'Mock Tests & Feedback',
        illustration: '/assets/images/courses/ielts-module-5.jpg',
        topics: [
          'Full-length Mock Tests',
          'Band-wise evaluation',
          'Personalised score analysis & tips',
        ],
      },
    ],
    successStories: [
      {
        name: 'Ravi Kumar',
        title: 'Graduate Student',
        avatar: '/assets/images/testimonials/boy.jpg',
        quote:
          'I needed a band 7 for my university application but kept scoring 6.5. After this course, I achieved 7.5 overall! The writing strategies were game-changers.',
        achievement: 'Admitted to Oxford University',
      },
      {
        name: 'Aisha Rahman',
        title: 'Healthcare Professional',
        avatar: '/assets/images/testimonials/girl.jpg',
        quote:
          'The mock tests and detailed feedback helped me identify my weaknesses. I improved from band 6 to band 8 in just two months!',
        achievement: 'Successfully Immigrated to Canada',
      },
    ],
  },
  {
    id: 3,
    slug: 'interview-prep',
    type: 'Career Development',
    name: 'Interview Preparation',
    title: 'Crack Your Job Interviews with Confidence!',
    description: `Master spoken English, body language & mock interviews with expert trainers.`,
    heroImage: '/assets/images/courses/interview-prep.jpg',
    duration: '40 Hours',
    level: 'Beginner | Intermediate | Advanced',
    keySkills: [
      {
        icon: 'fa-comments',
        title: 'Confident Answers',
        description: 'Respond to common interview questions with clarity.',
      },
      {
        icon: 'fa-user-tie',
        title: 'Speak About Yourself',
        description: 'Share your goals, strengths, and experience clearly.',
      },
      {
        icon: 'fa-briefcase',
        title: 'Professional Communication',
        description: 'Build fluency, strong vocabulary, and a formal tone.',
      },
      {
        icon: 'fa-star',
        title: 'Standout Responses',
        description: 'Frame smart, impactful answers that get noticed.',
      },
    ],
    approach: `At Fluentia Language School, we combine expert coaching, real mock interviews, and personalized feedback to help you succeed in job interviews.
    Our sessions focus on building fluency, body language, clarity, and confidence through interactive techniques like role-plays, mock interviews, personalized corrections, and real-time feedback.
    We help you overcome nervousness, structure answers smartly, and speak with impact — even in high-pressure interview settings`,
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
        illustration: '/assets/images/courses/interview-prep-module-1.jpg',
        topics: [
          'Sentense building',
          'Job-related vocabulary',
          'Confidence-building speaking tasks',
        ],
      },
      {
        title: 'Interview Skills',
        illustration: '/assets/images/courses/interview-prep-module-2.jpg',
        topics: [
          'Tell me about yourself',
          'Discussing strengths, weaknesses, and goals',
          'Framing answers to “Why this company?”, “Where do you see yourself in 5 years?” etc',
        ],
      },
      {
        title: 'Mock Interviews and Feedback',
        illustration: '/assets/images/courses/interview-prep-module-3.jpg',
        topics: [
          'Live mock interview sessions',
          'Personalized trainer feedback',
          'Body language, accent, and tone correction',
        ],
      },
    ],
    successStories: [
      {
        name: 'Binayak Purohit',
        title: 'IT Professional',
        avatar: '/assets/images/testimonials/boy.jpg',
        quote:
          'After failing three interviews due to communication issues, I took this course. The mock interviews with tech recruiters were incredibly realistic. Two weeks after completing the course, I received two job offers!',
        achievement: 'Senior Developer Position at International Tech Firm',
      },
      {
        name: 'Roshni Sultana',
        title: 'Management Consultant',
        avatar: '/assets/images/testimonials/girl.jpg',
        quote:
          "The personalized feedback helped me identify subtle communication issues I wasn't aware of. The techniques for answering case study questions were invaluable for consulting interviews.",
        achievement: 'Secured Role at Top-Tier Consulting Firm',
      },
    ],
  },
];
