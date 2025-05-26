import { Language } from '../models/Language.model';

export const Languages: Language[] = [
  {
    id: 1,
    slug: 'french',
    name: 'French',
    title:
      'Master French with Fluentia – Your Gateway to a World of Opportunities',
    description:
      "French is not just a language; it's a key to understanding a rich culture, history, and global influence. With over 300 million speakers worldwide, French is the official language of many international organizations and a vital language in diplomacy, business, and culture.",
    benefitTitle: 'Why Learn French?',
    benefits: [
      {
        icon: 'fa-globe-europe',
        title: 'Global Recognition',
        description:
          'is an official language in 29 countries and spoken across five continents.',
      },
      {
        icon: 'fa-briefcase',
        title: 'Career Advancement',
        description:
          'Open doors to international companies, diplomatic services, and EU institutions.',
      },
      {
        icon: 'fa-graduation-cap',
        title: 'Academic Excellence',
        description:
          'Access prestigious universities in France, Canada, and other French-speaking countries.',
      },
      {
        icon: 'fa-theater-masks',
        title: 'Cultural Immersion',
        description:
          'Explore the rich heritage of French literature, cinema, art, and gastronomy.',
      },
    ],
    methodologyTitle: 'Our French Learning Approach',
    methodology:
      "At Fluentia Language School, we bring the French experience to you through an engaging, immersive, and structured curriculum. Our courses focus on real-life communication, helping you build strong speaking, listening, reading, and writing skills. You'll not only learn the nuances of pronunciation and grammar but also gain deep insights into French culture, traditions, and etiquette. Through interactive role-plays, multimedia content, and discussions on French art, history, and cuisine, we make learning both effective and enjoyable.",
    examTitle: 'Prepare for International Recognition',
    examDescription:
      'Our course prepares you for internationally recognized French language examinations:',
    exams: [
      "DELF (Diplôme d'études en langue française)",
      'DALF (Diplôme approfondi de langue française)',
      "TEF (Test d'évaluation de français)",
    ],
    testimonials: [
      {
        name: 'Priya Sharma',
        text: 'After six months at Fluentia, I passed my DELF B2 with distinction. The teachers make French come alive!',
        avatar: '/assets/images/testimonials/girl.jpg',
      },
      {
        name: 'Rahul Tripathi',
        text: 'The cultural insights provided alongside language training made my relocation to Paris so much smoother.',
        avatar: '/assets/images/testimonials/boy.jpg',
      },
    ],
    ctaTitle: 'Start Your French Journey Today',
    ctaText:
      'Join Fluentia Language School and embark on a transformative journey into the French-speaking world.',
    imageMain: '/assets/images/languages/french-main.jpg',
    imageSecondary: '/assets/images/languages/french-culture.jpg',
    color: '#002395', // French flag blue
  },
  {
    id: 2,
    slug: 'spanish',
    name: 'Spanish',
    title:
      'Learn Spanish at Fluentia – Connect with 500+ Million Speakers Worldwide!',
    description:
      'Spanish opens doors to vibrant cultures across Spain, Latin America, and beyond. As the second most spoken native language globally, Spanish proficiency enhances both personal and professional opportunities in countless ways.',
    benefitTitle: 'Why Learn Spanish?',
    benefits: [
      {
        icon: 'fa-comments',
        title: 'Widespread Communication',
        description:
          'Connect with over 500 million Spanish speakers across 20+ countries.',
      },
      {
        icon: 'fa-plane',
        title: 'Travel Confidence',
        description:
          'Navigate Spanish-speaking countries with ease and authenticity.',
      },
      {
        icon: 'fa-chart-line',
        title: 'Business Advantage',
        description: 'Tap into growing markets across Spain and Latin America.',
      },
      {
        icon: 'fa-music',
        title: 'Cultural Richness',
        description:
          'Enjoy films, music, literature and art in their original form.',
      },
    ],
    methodologyTitle: 'Our Spanish Learning Approach',
    methodology:
      "Our Spanish program emphasizes practical communication skills through immersive learning experiences. We balance structured grammar instruction with abundant speaking practice, cultural discussions, and multimedia resources. From day one, you'll engage in Spanish conversations, building confidence alongside competence.",
    examTitle: 'Spanish Certification Pathways',
    examDescription:
      'Validate your Spanish proficiency with internationally recognized credentials:',
    exams: [
      'DELE (Diplomas de Español como Lengua Extranjera)',
      'SIELE (Servicio Internacional de Evaluación de la Lengua Española)',
      'OPI (Oral Proficiency Interview)',
    ],
    testimonials: [
      {
        name: 'Amit Hegde',
        text: 'The conversational focus at Fluentia helped me become fluent enough to secure a job in Madrid within a year!',
        avatar: '/assets/images/testimonials/boy.jpg',
      },
      {
        name: 'Neha Mehta',
        text: 'The teachers make learning Spanish fun and practical. I can now watch Spanish shows without subtitles!',
        avatar: '/assets/images/testimonials/girl.jpg',
      },
    ],
    ctaTitle: 'Embrace the Spanish Language',
    ctaText:
      'Join our vibrant Spanish learning community and discover a new world of expression.',
    imageMain: '/assets/images/languages/spanish-main.jpg',
    imageSecondary: '/assets/images/languages/spanish-culture.jpg',
    color: '#AA151B', // Spanish flag red
  },
  {
    id: 3,
    slug: 'german',
    name: 'German',
    title:
      "Master German with Fluentia – Your Gateway to Europe's Largest Economy",
    description:
      "German is the key to Central European business, culture, and innovation. As Europe's most widely spoken native language and the language of a powerhouse economy, German proficiency creates exceptional opportunities.",
    benefitTitle: 'Why Learn German?',
    benefits: [
      {
        icon: 'fa-industry',
        title: 'Economic Powerhouse',
        description:
          "Access Europe's largest economy and global industry leaders.",
      },
      {
        icon: 'fa-flask',
        title: 'Scientific Advantage',
        description:
          'German ranks second in scientific publications and research opportunities.',
      },
      {
        icon: 'fa-university',
        title: 'Educational Excellence',
        description:
          'Study at world-class universities with low or no tuition fees.',
      },
      {
        icon: 'fa-book',
        title: 'Philosophical Heritage',
        description:
          'Engage with influential thinkers and cultural movements in their original language.',
      },
    ],
    methodologyTitle: 'Our German Learning Approach',
    methodology:
      "Our German program combines precision with practical application. We tackle the language's structured grammar through clear explanations and targeted exercises, while developing your speaking abilities through regular conversation practice. Cultural context enhances your understanding of German-speaking societies.",
    examTitle: 'German Certification Options',
    examDescription:
      'Demonstrate your German proficiency with these respected credentials:',
    exams: [
      'Goethe-Zertifikat (A1-C2)',
      'TestDaF (Test Deutsch als Fremdsprache)',
      'DSH (Deutsche Sprachprüfung für den Hochschulzugang)',
    ],
    testimonials: [
      {
        name: 'Siddharth Kulkarni',
        text: "Fluentia's systematic approach to German grammar made a seemingly difficult language accessible and logical!",
        avatar: '/assets/images/testimonials/boy.jpg',
      },
      {
        name: 'Anjali Wadhwa',
        text: 'I secured an internship in Berlin after just one year of German studies at Fluentia. Their business German module was invaluable.',
        avatar: '/assets/images/testimonials/girl.jpg',
      },
    ],
    ctaTitle: 'Build Your German Future',
    ctaText:
      'Join our structured German program and open doors to Central European opportunities.',
    imageMain: '/assets/images/languages/german-main.jpg',
    imageSecondary: '/assets/images/languages/german-culture.jpg',
    color: '#FFCC00', // German flag gold
  },
  {
    id: 4,
    slug: 'mandarin',
    name: 'Mandarin',
    title: 'Learn Mandarin Chinese – The Language of the Future',
    description:
      'Mandarin Chinese is the most spoken language in the world with over 1.3 billion native speakers. As China continues its rise as a global economic powerhouse, proficiency in Mandarin opens countless doors in business, technology, and cultural exchange.',
    benefitTitle: 'Why Learn Chinese?',
    benefits: [
      {
        icon: 'fa-users',
        title: 'Global Reach',
        description: 'Communicate with over 1.3 billion people worldwide.',
      },
      {
        icon: 'fa-landmark',
        title: 'Cultural Heritage',
        description:
          'Access 5,000 years of rich history, philosophy, and literature.',
      },
      {
        icon: 'fa-handshake',
        title: 'Business Opportunities',
        description:
          "Connect with the world's second-largest economy and growing market.",
      },
      {
        icon: 'fa-brain',
        title: 'Cognitive Benefits',
        description:
          'Develop new thinking patterns through a tonal, character-based language.',
      },
    ],
    methodologyTitle: 'Our Chinese Learning Approach',
    methodology:
      'Our Chinese program balances character acquisition with practical speaking skills. We use innovative memory techniques to make Chinese characters accessible and engaging, while developing your ear for tones through constant practice. Cultural immersion enhances your understanding of modern and traditional Chinese society.',
    examTitle: 'Chinese Proficiency Certifications',
    examDescription:
      'Validate your Chinese language skills with internationally recognized exams:',
    exams: [
      'HSK (Hanyu Shuiping Kaoshi)',
      'HSKK (HSK Speaking Test)',
      'BCT (Business Chinese Test)',
    ],
    testimonials: [
      {
        name: 'Vikram Lal',
        text: 'The character learning system at Fluentia makes what seemed impossible actually enjoyable. I can now read signs and menus in China!',
        avatar: '/assets/images/testimonials/boy.jpg',
      },
      {
        name: 'Meera Warrier',
        text: 'As someone who wanted to connect with my heritage, Fluentia helped me gain confidence in speaking with my extended family.',
        avatar: '/assets/images/testimonials/girl.jpg',
      },
    ],
    ctaTitle: 'Begin Your Chinese Journey',
    ctaText:
      'Join our innovative Mandarin program and connect with the fastest-growing global language.',
    imageMain: '/assets/images/languages/mandarin-main.jpg',
    imageSecondary: '/assets/images/languages/mandarin-culture.jpg',
    color: '#DE2910', // Chinese flag red
  },
  {
    id: 5,
    slug: 'korean',
    name: 'Korean',
    title: 'Unlock the Korean Wave with Fluentia – Language and Culture',
    description:
      "From K-Pop and K-Dramas to cutting-edge technology, South Korea's global influence is undeniable. Learning Korean opens doors to a vibrant culture, exciting career opportunities, and deeper connections with millions worldwide.",
    benefitTitle: 'Why Learn Korean?',
    benefits: [
      {
        icon: 'fa-music',
        title: 'Cultural Engagement',
        description:
          'Immerse yourself in the world of K-Pop, K-Dramas, and Korean cinema.',
      },
      {
        icon: 'fa-keyboard',
        title: 'Technological Hub',
        description:
          'Connect with a global leader in technology and innovation.',
      },
      {
        icon: 'fa-cutlery',
        title: 'Culinary Delights',
        description: 'Explore the rich and flavorful world of Korean cuisine.',
      },
      {
        icon: 'fa-comments',
        title: 'Global Communication',
        description:
          'Communicate with over 75 million Korean speakers around the world.',
      },
    ],
    methodologyTitle: 'Our Korean Learning Approach',
    methodology:
      'Our Korean program focuses on a balanced approach, integrating Hangul literacy with practical conversational skills. We emphasize pronunciation early on and incorporate cultural insights to enhance your learning experience. Interactive lessons and multimedia resources make learning engaging and effective.',
    examTitle: 'Korean Language Proficiency Tests',
    examDescription:
      'Validate your Korean skills with internationally recognized certifications:',
    exams: [
      'TOPIK (Test of Proficiency in Korean)',
      'KLPT (Korean Language Proficiency Test)',
    ],
    testimonials: [
      {
        name: 'Sneha Menon',
        text: "Fluentia's teachers made learning Hangul so much easier than I expected. Now I can finally understand my favorite K-Pop lyrics!",
        avatar: '/assets/images/testimonials/girl.jpg',
      },
      {
        name: 'Arjun Singh',
        text: 'Learning Korean at Fluentia has been fantastic for my career prospects in South Korea. The business Korean modules were particularly helpful.',
        avatar: '/assets/images/testimonials/boy.jpg',
      },
    ],
    ctaTitle: 'Dive into the Korean Language',
    ctaText:
      'Join our engaging Korean program and discover a new world of culture and communication.',
    imageMain: '/assets/images/languages/korean-main.jpg',
    imageSecondary: '/assets/images/languages/korean-culture.jpg',
    color: '#000000', // Black, often associated with Korean calligraphy and tradition
  },
  {
    id: 6,
    slug: 'japanese',
    name: 'Japanese',
    title: "Explore Japan's Richness with Fluentia – Language and Culture",
    description:
      "Japanese is a language steeped in history and tradition, yet vital in modern technology, anime, and global business. Learning Japanese offers a unique perspective and access to one of the world's most fascinating cultures.",
    benefitTitle: 'Why Learn Japanese?',
    benefits: [
      {
        icon: 'fa-tv',
        title: 'Anime and Manga',
        description:
          'Enjoy your favorite Japanese animation and comics in their original language.',
      },
      {
        icon: 'fa-robot',
        title: 'Technological Innovation',
        description:
          'Engage with advancements in robotics, gaming, and electronics.',
      },
      {
        icon: 'fa-tree',
        title: 'Cultural Depth',
        description:
          'Understand the nuances of Japanese customs, etiquette, and art.',
      },
      {
        icon: 'fa-building',
        title: 'Business Opportunities',
        description:
          'Connect with a major global economy and influential businesses.',
      },
    ],
    methodologyTitle: 'Our Japanese Learning Approach',
    methodology:
      'Our Japanese program carefully guides you through the complexities of Hiragana, Katakana, and Kanji, while emphasizing practical communication skills. We use a structured yet engaging approach, incorporating real-life scenarios and cultural context to make your learning journey rewarding.',
    examTitle: 'Japanese Language Proficiency Test',
    examDescription:
      'Measure your Japanese language ability with the widely recognized:',
    exams: ['JLPT (Japanese Language Proficiency Test)'],
    testimonials: [
      {
        name: 'Pooja Reddy',
        text: "Fluentia's step-by-step approach to Kanji made it less intimidating. I'm now able to read basic Japanese texts!",
        avatar: '/assets/images/testimonials/girl.jpg',
      },
      {
        name: 'Rohan Patil',
        text: 'Learning Japanese at Fluentia has significantly improved my interactions with my colleagues in our Tokyo office. The cultural insights were invaluable.',
        avatar: '/assets/images/testimonials/boy.jpg',
      },
    ],
    ctaTitle: 'Embark on Your Japanese Learning Adventure',
    ctaText:
      'Join our comprehensive Japanese program and unlock a world of new experiences.',
    imageMain: '/assets/images/languages/japanese-main.jpg',
    imageSecondary: '/assets/images/languages/japanese-culture.jpg',
    color: '#BC002D', // Red, often symbolic in Japanese culture
  },
  {
    id: 7,
    slug: 'arabic',
    name: 'Arabic',
    title:
      'Discover the Richness of Arabic with Fluentia – Language and Culture',
    description:
      'Arabic is a language with a profound historical and cultural significance, spoken across the Middle East and North Africa. Learning Arabic opens doors to a vast literary tradition, diverse cultures, and a deeper understanding of the world.',
    benefitTitle: 'Why Learn Arabic?',
    benefits: [
      {
        icon: 'fa-globe-asia',
        title: 'Global Reach',
        description:
          'Communicate across numerous countries in the Middle East and North Africa.',
      },
      {
        icon: 'fa-mosque',
        title: 'Cultural Heritage',
        description:
          'Engage with a rich history of literature, poetry, and philosophy.',
      },
      {
        icon: 'fa-oil-can',
        title: 'Economic Significance',
        description:
          'Connect with important business and economic hubs in the Arab world.',
      },
      {
        icon: 'fa-book-open',
        title: 'Religious Understanding',
        description:
          'Gain deeper insights into Islamic culture and traditions.',
      },
    ],
    methodologyTitle: 'Our Arabic Learning Approach',
    methodology:
      'Our Arabic program focuses on building a strong foundation in Modern Standard Arabic (MSA) while introducing key regional dialects. We emphasize reading and writing the Arabic script from the beginning, alongside developing essential listening and speaking skills through interactive and culturally relevant materials.',
    examTitle: 'Arabic Language Proficiency Tests',
    examDescription:
      'Certify your Arabic language skills with recognized assessments:',
    exams: [
      'ALPT (Arabic Language Proficiency Test)',
      'ACTFL (American Council on the Teaching of Foreign Languages) assessments',
    ],
    testimonials: [
      {
        name: 'Imran Zaidi',
        text: "Fluentia's instructors are excellent at explaining the intricacies of Arabic grammar. I'm now much more confident in my reading and writing.",
        avatar: '/assets/images/testimonials/boy.jpg',
      },
      {
        name: 'Shreya Bhattacharya',
        text: 'Learning Arabic at Fluentia has enriched my understanding of Middle Eastern culture and improved my ability to connect with colleagues from the region.',
        avatar: '/assets/images/testimonials/girl.jpg',
      },
    ],
    ctaTitle: 'Begin Your Arabic Language Journey',
    ctaText:
      'Join our comprehensive Arabic program and unlock a world of history and culture.',
    imageMain: '/assets/images/languages/arabic-main.jpg',
    imageSecondary: '/assets/images/languages/arabic-culture.jpg',
    color: '#007A33', // Green, often associated with Islam and many Arab flags
  },
  // More languages can be added here following the same structure
];
