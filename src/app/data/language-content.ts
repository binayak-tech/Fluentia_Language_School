import { Language } from "../models/Language.model";

export const Languages: Language[] = [
    {
        id: 1,
        slug: 'french',
        name: 'French',
        description: `Master French with Fluentia Language School – Unlock a World of Opportunities!
    In today’s globalized world, learning French is more than just acquiring a language—it’s embracing a culture, expanding career horizons, and stepping into a world of new possibilities. Spoken by over 300 million people across five continents, French is not only the language of love but also of diplomacy, business, and international relations...
    [truncated for brevity; paste full description in your app]`,
        highlights: [
          'Native speaking instructors',
          'Cultural immersion',
          'Conversational focus',
          'Business French options'
        ],
        image: 'assets/images/french.jpg',
        difficulty: 'Medium',
        timeToFluency: '12-18 months'
      },
      {
        id: 2,
        slug: 'german',
        name: 'German',
        description: `Master German with Fluentia Language School – Your Gateway to Global Success!
    In today’s interconnected world, learning German is a game-changer...
    [rest of full description here]`,
        highlights: [
          'Expert instructors',
          'Immersive cultural experience',
          'Exam preparation (Goethe-Zertifikat, TestDaF, TELC)',
          'Goal-oriented curriculum'
        ],
        image: 'assets/images/german.jpg',
        difficulty: 'Medium',
        timeToFluency: '12-18 months'
      },
      {
        id: 3,
        slug: 'korean',
        name: 'Korean',
        description: `Master Korean with Fluentia Language School – Your Gateway to a Thriving Future!
    In the 21st century, learning Korean is more than just acquiring a language—it’s immersing yourself in a dynamic culture...
    [rest of full description here]`,
        highlights: [
          'TOPIK exam prep',
          'K-pop and K-culture integration',
          'Interactive conversation practice',
          'Expert Korean instructors'
        ],
        image: 'assets/images/korean.jpg',
        difficulty: 'Hard',
        timeToFluency: '18-24 months'
      },
      {
        id: 4,
        slug: 'japanese',
        name: 'Japanese',
        description: `Master Japanese with Fluentia Language School – Your Gateway to a Rich Culture & Global Success!
    In the 21st century, learning Japanese is not just about language—it’s about immersing yourself in one of the world’s most fascinating cultures...
    [rest of full description here]`,
        highlights: [
          'JLPT exam training (N5–N1)',
          'Cultural insights into traditions & etiquette',
          'Interactive learning modules',
          'Real-world conversation practice'
        ],
        image: 'assets/images/japanese.jpg',
        difficulty: 'Hard',
        timeToFluency: '18-30 months'
      },
      {
        id: 5,
        slug: 'spanish',
        name: 'Spanish',
        description: `Learn Spanish with Fluentia Language School – Connect, Explore, and Thrive!
    In today’s interconnected world, Spanish is more than just a language—it’s a gateway to vibrant cultures, exciting career opportunities...
    [rest of full description here]`,
        highlights: [
          'DELE and SIELE exam prep',
          'Latin American and Spanish culture',
          'Immersive learning experience',
          'Interactive conversation practice'
        ],
        image: 'assets/images/spanish.jpg',
        difficulty: 'Easy',
        timeToFluency: '9-15 months'
      },
      {
        id: 6,
        slug: 'arabic',
        name: 'Arabic',
        description: `Master Arabic with Fluentia Language School – Connect with a Rich Culture & Global Opportunities!
    In the 21st century, learning Arabic is a gateway to a world rich in history, culture, and economic power...
    [rest of full description here]`,
        highlights: [
          'ALPT and TOAFL exam prep',
          'Deep cultural and historical insights',
          'Structured curriculum',
          'Professional development focus'
        ],
        image: 'assets/images/arabic.jpg',
        difficulty: 'Hard',
        timeToFluency: '24-36 months'
      },
      {
        id: 7,
        slug: 'mandarin',
        name: 'Mandarin',
        description: `Master Mandarin with Fluentia Language School – Unlock the Language of the Future!
    In the 21st century, learning Mandarin Chinese is a game-changer...
    [rest of full description here]`,
        highlights: [
          'HSK exam preparation',
          'Chinese culture and philosophy',
          'Calligraphy and etiquette',
          'Business Chinese communication'
        ],
        image: 'assets/images/mandarin.jpg',
        difficulty: 'Very Hard',
        timeToFluency: '24-36 months'
      }
    ];