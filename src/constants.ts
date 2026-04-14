import { Subject, TelegramLink, QuickPrompt, Task } from './types';

export const TARGET_SCORES = {
  maths: { target: '85+', total: 90, label: 'Mathematics' },
  reasoning: { target: '85+', total: 90, label: 'Reasoning' },
  english: { target: '125+', total: 135, label: 'English' },
  gk: { target: '50+', total: 75, label: 'General Awareness' },
};

export const SUBJECTS_DATA: Subject[] = [
  {
    id: 'maths',
    title: 'Mathematics',
    target: '85+/90',
    iconName: 'trending-up',
    sections: [
      {
        title: "1. Syllabus Completion Strategy",
        points: [
          { label: "For Absolute Basics", text: "Kaushik Mohanty Sir - Complete Arithmetic In 15 Hours (Career Definer)" },
          { label: "For Fast Syllabus Coverage", text: "Bhutesh Sir - Complete Percentage Quick Revision (e1 Coaching Center)" },
          { label: "For Pre-Exam Revision", text: "Aditya Ranjan Sir - 45 Days 45 Marathon Playlist" },
          { label: "For Mains Practice", text: "Maths Mania - Maths Grind Series Playlist" }
        ]
      },
      {
        title: '2. The "Cheat Code" Formula Book',
        points: [
          { label: "What to include", text: "Polygon formulas, Direct/Transverse Common Tangents, Circle equations, Trigonometry identities, Algebra shortcuts, and Statistics." }
        ]
      },
      {
        title: "3. Calculation & Speed (Night Routine)",
        points: [
          { label: "Rule", text: "Do this mentally for 15 minutes in bed right before sleeping:" },
          { label: "Tables", text: "22 to 29 (Revise forwards and backwards)." },
          { label: "Squares", text: "Minimum up to 30 (Try for 50)." },
          { label: "Cubes", text: "Minimum up to 15 (Try for 20)." },
          { label: "Triplets", text: "Standard Pythagorean triplets (3-4-5, 5-12-13, 7-24-25, 20-21-29)." }
        ]
      }
    ],
    links: [
      { title: "Absolute Basics (15-Hr Marathon)", url: "https://www.youtube.com/watch?v=psoFmlvWwvM", author: "Kaushik Mohanty" },
      { title: "Fast Syllabus Coverage", url: "https://www.youtube.com/watch?v=uEou5LVZPHw", author: "Bhutesh Sir" },
      { title: "Pre-Exam Revision (45 Days)", url: "https://www.youtube.com/playlist?list=PLXTyt_wUBqQ581Fnv1u86HBrL2ssdjIr9", author: "Aditya Ranjan Sir" },
      { title: "Mains Practice Grind", url: "https://youtube.com/playlist?list=PLWoFohRKBLPsHE7ELte3cDEtecLYQ8jKY", author: "Maths Mania" }
    ]
  },
  {
    id: 'reasoning',
    title: 'Reasoning',
    target: '85+/90',
    iconName: 'target',
    sections: [
      {
        title: "1. Syllabus Completion",
        points: [
          { label: "Strategy", text: "Cover the reasoning syllabus only once. Clear basics from standard teachers on YouTube." },
          { label: "Primary Source", text: "e1 Coaching Center - Kamal Sir's Reasoning Playlist." }
        ]
      },
      {
        title: "2. Specific Chapter Focus",
        points: [
          { label: "Note Making", text: "Add short notes for tricky chapters to the back of your Maths Formula Book:" },
          { label: "Calendars", text: "Odd days calculations" },
          { label: "Clocks", text: "Angle formulas" },
          { label: "Syllogism", text: "150-50 method or standard Venn Diagram logic" },
          { label: "Number Series", text: "Missing Numbers & unique logic patterns you encounter in mocks." }
        ]
      }
    ],
    links: [
      { title: "Reasoning Basics", url: "https://www.youtube.com/@e1coachingcenter/playlists", author: "Kamal Sir (e1)" }
    ]
  },
  {
    id: 'english',
    title: 'English',
    target: '125+/135',
    iconName: 'book-open',
    sections: [
      {
        title: "1. Grammar Strategy",
        points: [
          { label: "Primary Source", text: "Nimisha Bansal Mam - 120 Rules of Grammar Playlist. Watch completely and make handwritten notes." },
          { label: "Daily Practice", text: "Qng Queen - Watch 1 video daily for Sentence Rearrangement, Error Detection, Voice, and Narration." }
        ]
      },
      {
        title: "2. Vocabulary Strategy",
        points: [
          { label: "Primary Source", text: "Nimisha Bansal Mam's Daily Editorial." },
          { label: 'The "One-Month Written Rule"', text: "Write the date, 10 main words, 20-30 synonyms, antonyms, and Phrasal Verbs daily for 1 month." }
        ]
      },
      {
        title: '3. The "ChatGPT Vocab Booster"',
        points: [
          { label: "Prompt Command", text: 'Use the AI Tools tab in this app to generate tricks for tricky words instead of leaving the platform.' }
        ]
      },
      {
        title: "4. Spellings & Comprehension",
        points: [
          { label: "Spellings", text: "Look at spelling options in ONE glance during exams to avoid self-doubt." },
          { label: "Reading Comprehension (RC)", text: "Develop a habit of reading the questions BEFORE reading the passage." }
        ]
      }
    ],
    links: [
      { title: "120 Rules of Grammar", url: "https://www.youtube.com/results?search_query=nimisha+bansal+120+rules+of+grammar", author: "Nimisha Bansal" },
      { title: "Daily Practice (Grammar/Vocab)", url: "https://www.youtube.com/@qngqueen", author: "Qng Queen" }
    ]
  },
  {
    id: 'gk',
    title: 'General Awareness',
    target: '50+/75',
    iconName: 'book-marked',
    sections: [
      {
        title: "1. Core Syllabus (Static & Subjects)",
        points: [
          { label: "Primary Source", text: "Parmar SSC - Visit Parmar SSC Channel (Look for GK 4.0 Playlist)" },
          { label: "Biology Alternative", text: "Radhika Mam - Biology By Radhika Mam Playlist" },
          { label: "Note-Making Rule", text: "Strictly Handwritten Notes." }
        ]
      },
      {
        title: "2. Current Affairs (CA) Strategy",
        points: [
          { label: "Primary Monthly Source", text: "Parcham Classes - Follow their monthly playlist." },
          { label: "Alternative Daily Source", text: "Kumar Gaurav Sir (Utkarsh Classes) - Highly recommended ONLY if you have time." },
          { label: "Revision Source", text: "Parmar Sir's Monthly CA One-Shots. Focus heavily on the last 8-10 months." }
        ]
      },
      {
        title: '3. The "WhatsApp Trick" (Widen Your Scope)',
        points: [
          { label: "Strategy", text: "Create a personal WhatsApp group with just yourself. Type new facts or forgotten details as one-liners." }
        ]
      },
      {
        title: "4. AI for Heavy Static Data",
        points: [
          { label: "Prompt Strategy", text: "Use the AI Tools tab to generate mnemonics for UNESCO Sites, Biosphere Reserves, etc." }
        ]
      }
    ],
    links: [
      { title: "Core Static Syllabus (GK 4.0)", url: "https://www.youtube.com/@parmarssc", author: "Parmar SSC" },
      { title: "Biology Alternative", url: "https://www.youtube.com/playlist?list=PL5SDlP42gG0g-3ZxDmNRrba_Bbp3T6kCv", author: "Radhika Mam" },
      { title: "Monthly CA One Shots", url: "https://www.youtube.com/watch?v=iEAyS_NIVOs", author: "Parcham Classes" },
      { title: "Daily CA (Alternative)", url: "https://www.youtube.com/@UTKARSHCLASSES13", author: "Kumar Gaurav Sir" }
    ]
  },
  {
    id: 'computer',
    title: 'Computer & Typing',
    target: '30+/60 & 30+ WPM',
    iconName: 'monitor',
    sections: [
      {
        title: "1. Computer Knowledge Test (Target: 30+/60)",
        points: [
          { label: "When to start", text: "2 months before Mains." },
          { label: "Playlist 1", text: "RBE Revolution By Education - Computer 3.0 Complete Batch Playlist" },
          { label: "Playlist 2", text: "Arora Educator - Computer Awareness Playlists" }
        ]
      },
      {
        title: "2. Typing Test (DEST) (Target: 30+ WPM)",
        points: [
          { label: "When to start", text: "Right now. 15-20 minutes daily." },
          { label: "Platforms", text: "Sony Typing Tutor or TypingBaba." },
          { label: "Focus", text: "Accuracy over speed." }
        ]
      }
    ],
    links: [
      { title: "Computer 3.0 Complete Batch", url: "https://www.youtube.com/playlist?list=PL5SDlP42gG0j-LjdzQ8M6PbVBZAE1xiyd", author: "RBE" },
      { title: "Computer Awareness", url: "https://www.youtube.com/c/AroraEducator/playlists", author: "Arora Educator" }
    ]
  }
];

export const TELEGRAM_LINKS: TelegramLink[] = [
  { title: "RBE - Revolution By Education", url: "https://telegram.me/RBE_S", desc: "Best for exact shift-wise PYQ compilations, cut-offs, & notices." },
  { title: "English Madhyam", url: "https://telegram.me/englishmadhyam", desc: "Daily free high-quality Hindu Editorial PDFs with vocab & tests." },
  { title: "The Pundits", url: "https://t.me/ThePundits_Official", desc: "Daily study targets, short quizzes, and discipline by Toppers." },
  { title: "QMaths", url: "https://telegram.me/qmaths", desc: "Fastest cleanly formatted printable PYQ PDFs after answer keys." },
  { title: "Parmar SSC", url: "https://t.me/Parmar_SSC", desc: "Free PDFs of YT series, extra static GK notes & science." }
];

export const INITIAL_TASKS: Task[] = [
  { id: 1, text: "GK Revision (First 2-3 Hours)", done: false },
  { id: 2, text: "Maths Practice (1.5 Hours PYQs)", done: false },
  { id: 3, text: "English Qng Queen Video", done: false },
  { id: 4, text: "Nimisha Mam Daily Editorial", done: false },
  { id: 5, text: "Typing Practice (15 mins)", done: false },
  { id: 6, text: "Sectional Mock Test", done: false },
  { id: 7, text: "Night Speed Math Mentally (15 mins)", done: false },
];

export const QUICK_PROMPTS: QuickPrompt[] = [
  {
    iconName: 'camera', iconColor: 'text-indigo-500',
    label: "Solve Image",
    template: "Solve the tricky Maths/Reasoning question in the attached image. Provide the step-by-step solution, the smart shortcut approach, and the final answer clearly."
  },
  {
    iconName: 'image', iconColor: 'text-fuchsia-600',
    label: "Visual Meme",
    template: "[IMAGE] Generate a funny, memorable cartoon visual to help me remember this GK fact/topic:\n[ENTER GK TOPIC HERE]"
  },
  {
    iconName: 'book-a', iconColor: 'text-indigo-600',
    label: "Vocab Tricks",
    template: "Give me mnemonic tricks, Hindi meanings, and a quick MCQ for these tricky English words:\n[ENTER WORDS HERE]"
  },
  {
    iconName: 'calculator', iconColor: 'text-red-600',
    label: "Maths Shortcut",
    template: "I am struggling with this Maths topic in SSC CGL: [ENTER MATHS TOPIC e.g., Compound Interest Installments].\nDifficulty Level: [ENTER DIFFICULTY e.g., easy, medium, hard]\n\nGive me the absolute fastest 'smart approach' or ratio-method shortcut trick to solve these without using 'x' or long formulas."
  },
  {
    iconName: 'check-square', iconColor: 'text-teal-600',
    label: "Grammar Fix",
    template: "Find the grammatical error in this sentence, fix it, and explain the exact SSC CGL grammar rule behind it:\n[ENTER SENTENCE HERE]"
  },
  {
    iconName: 'brain', iconColor: 'text-emerald-600',
    label: "GK Mnemonics",
    template: "Give me a hilarious Hinglish mnemonic story or acronym to remember this GK topic:\n[ENTER TOPIC HERE]"
  },
  {
    iconName: 'briefcase', iconColor: 'text-slate-600',
    label: "Post Advisor",
    template: "I am confused between [POST 1, e.g., Income Tax Inspector] and [POST 2, e.g., ASO in CSS]. Compare them based on salary, work-life balance, promotions, transfers, and field vs desk work."
  },
  {
    iconName: 'line-chart', iconColor: 'text-amber-600',
    label: "Analyze Mocks",
    template: "Analyze my latest SSC CGL Mains mock scores:\nMaths: [ ]/90\nReasoning: [ ]/90\nEnglish: [ ]/135\nGK: [ ]/75\n\nGive me a brutal 3-step action plan to reach the 345+ safe score."
  },
  {
    iconName: 'book-open-text', iconColor: 'text-blue-600',
    label: "RC Builder",
    template: "Create a short, advanced-level Reading Comprehension passage about [ENTER TOPIC HERE]. Include 3 difficult SSC-style multiple-choice questions with answers and explanations."
  }
];
