export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
}

const QUIZ_BANK: QuizQuestion[] = [
  {
    question: "How many hours of sleep do adults typically need per night for optimal health?",
    options: ["4-5 hours", "6-7 hours", "7-9 hours", "10-12 hours"],
    correctAnswer: 2
  },
  {
    question: "What is the recommended amount of moderate physical activity per week for adults?",
    options: ["30 minutes", "75 minutes", "150 minutes", "300 minutes"],
    correctAnswer: 2
  },
  {
    question: "Which of the following is the best way to stay hydrated?",
    options: ["Drinking coffee throughout the day", "Drinking water regularly", "Only drinking when thirsty", "Drinking energy drinks"],
    correctAnswer: 1
  },
  {
    question: "What is a healthy resting heart rate for adults?",
    options: ["40-50 bpm", "60-100 bpm", "110-120 bpm", "130-140 bpm"],
    correctAnswer: 1
  },
  {
    question: "Which nutrient is essential for building and repairing body tissues?",
    options: ["Carbohydrates", "Fats", "Protein", "Vitamins"],
    correctAnswer: 2
  },
  {
    question: "How often should you take breaks when sitting for long periods?",
    options: ["Every 3-4 hours", "Every 2 hours", "Every 30-60 minutes", "Only when tired"],
    correctAnswer: 2
  },
  {
    question: "What is the recommended daily water intake for adults?",
    options: ["2-3 glasses", "4-5 glasses", "8 or more glasses", "12 or more glasses"],
    correctAnswer: 2
  },
  {
    question: "Which of these is a sign of good mental health?",
    options: ["Avoiding all stress", "Being able to cope with daily challenges", "Never feeling sad", "Working without breaks"],
    correctAnswer: 1
  },
  {
    question: "What is the best time to stretch your muscles?",
    options: ["Only before exercise", "Only after exercise", "Both before and after exercise", "Stretching is not necessary"],
    correctAnswer: 2
  },
  {
    question: "How does regular exercise benefit mental health?",
    options: ["It has no effect on mental health", "It reduces stress and improves mood", "It only helps physical health", "It increases anxiety"],
    correctAnswer: 1
  },
  {
    question: "What percentage of your plate should be filled with fruits and vegetables?",
    options: ["10%", "25%", "50%", "75%"],
    correctAnswer: 2
  },
  {
    question: "Which of the following is a healthy way to manage stress?",
    options: ["Skipping meals", "Deep breathing exercises", "Avoiding sleep", "Ignoring the problem"],
    correctAnswer: 1
  },
  {
    question: "How long should you wash your hands to effectively remove germs?",
    options: ["5 seconds", "10 seconds", "20 seconds", "60 seconds"],
    correctAnswer: 2
  },
  {
    question: "What is the primary benefit of maintaining good posture?",
    options: ["Looking taller", "Reducing strain on muscles and joints", "Burning more calories", "Improving digestion only"],
    correctAnswer: 1
  },
  {
    question: "Which vitamin is primarily obtained from sunlight exposure?",
    options: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin E"],
    correctAnswer: 2
  }
];

export function getRandomQuestions(count: number = 8): QuizQuestion[] {
  const shuffled = [...QUIZ_BANK].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

export function calculateQuizScore(
  questions: QuizQuestion[],
  answers: Record<number, number>
): number {
  let correct = 0;
  questions.forEach((question, index) => {
    if (answers[index] === question.correctAnswer) {
      correct++;
    }
  });
  return Math.round((correct / questions.length) * 100);
}

export function getQuizTips(score: number): string[] {
  if (score >= 80) {
    return [
      "Excellent work! You have a strong understanding of health and wellness principles.",
      "Keep up your healthy habits and continue learning about new wellness strategies.",
      "Consider sharing your knowledge with friends and family to help them improve their health too.",
      "Stay curious and keep exploring advanced topics in nutrition, fitness, and mental health."
    ];
  } else if (score >= 60) {
    return [
      "Good job! You have a solid foundation in health and wellness knowledge.",
      "Focus on areas where you were unsure to strengthen your understanding of healthy living.",
      "Try incorporating more of the recommended health practices into your daily routine.",
      "Continue learning about nutrition, exercise, and stress management to improve your wellness."
    ];
  } else if (score >= 40) {
    return [
      "You're on the right track! There's room to improve your health and wellness knowledge.",
      "Consider reading more about basic health principles like sleep, nutrition, and exercise.",
      "Start with small changes: drink more water, move regularly, and prioritize sleep.",
      "Don't hesitate to consult healthcare professionals for personalized advice and guidance."
    ];
  } else {
    return [
      "Keep learning! Building health knowledge takes time, and you're taking the first step.",
      "Focus on the basics: aim for 7-9 hours of sleep, stay hydrated, and move your body daily.",
      "Consider taking the quiz again after learning more about health and wellness topics.",
      "Speak with a healthcare provider to create a personalized plan for improving your health."
    ];
  }
}
