interface CheckInData {
  sleep: number;
  stress: number;
  pain: number;
  activity: number;
  hydration: number;
  mood: number;
}

export function calculateHealthScore(data: CheckInData): number {
  let score = 0;

  // Sleep (0-20 points): Optimal is 7-9 hours
  if (data.sleep >= 7 && data.sleep <= 9) {
    score += 20;
  } else if (data.sleep >= 6 && data.sleep <= 10) {
    score += 15;
  } else if (data.sleep >= 5 && data.sleep <= 11) {
    score += 10;
  } else {
    score += 5;
  }

  // Stress (0-15 points): Lower is better
  if (data.stress <= 3) {
    score += 15;
  } else if (data.stress <= 5) {
    score += 12;
  } else if (data.stress <= 7) {
    score += 8;
  } else {
    score += 4;
  }

  // Pain (0-15 points): Lower is better
  if (data.pain === 0) {
    score += 15;
  } else if (data.pain <= 2) {
    score += 12;
  } else if (data.pain <= 4) {
    score += 9;
  } else if (data.pain <= 6) {
    score += 6;
  } else {
    score += 3;
  }

  // Activity (0-20 points): 30+ minutes is good
  const activityMinutes = data.activity * 10;
  if (activityMinutes >= 60) {
    score += 20;
  } else if (activityMinutes >= 30) {
    score += 16;
  } else if (activityMinutes >= 15) {
    score += 12;
  } else if (activityMinutes > 0) {
    score += 8;
  } else {
    score += 2;
  }

  // Hydration (0-15 points): 8 glasses is optimal
  if (data.hydration >= 8) {
    score += 15;
  } else if (data.hydration >= 6) {
    score += 12;
  } else if (data.hydration >= 4) {
    score += 9;
  } else if (data.hydration >= 2) {
    score += 6;
  } else {
    score += 3;
  }

  // Mood (0-15 points): Higher is better
  if (data.mood >= 8) {
    score += 15;
  } else if (data.mood >= 6) {
    score += 12;
  } else if (data.mood >= 4) {
    score += 8;
  } else {
    score += 4;
  }

  return Math.min(100, Math.round(score));
}

export function generateTips(data: CheckInData): string[] {
  const tips: string[] = [];

  // Sleep tips
  if (data.sleep < 6) {
    tips.push('Prioritize getting 7-9 hours of sleep tonight. Try establishing a consistent bedtime routine and avoiding screens 1 hour before bed.');
  } else if (data.sleep > 10) {
    tips.push('While rest is important, oversleeping can leave you feeling groggy. Aim for 7-9 hours and maintain a consistent wake time.');
  } else if (data.sleep >= 7 && data.sleep <= 9) {
    tips.push('Great job on your sleep! Keep maintaining this healthy sleep schedule for optimal recovery and energy.');
  }

  // Stress tips
  if (data.stress >= 7) {
    tips.push('Your stress levels are high. Try deep breathing exercises, a 10-minute meditation, or a short walk to help calm your mind.');
  } else if (data.stress >= 5) {
    tips.push('Consider incorporating stress-management techniques like journaling, yoga, or talking with a friend to maintain balance.');
  }

  // Pain tips
  if (data.pain >= 6) {
    tips.push('Significant pain detected. Consider gentle stretching, applying heat/ice, or consulting a healthcare professional if pain persists.');
  } else if (data.pain >= 3) {
    tips.push('Light stretching and mobility exercises can help reduce soreness. Listen to your body and avoid overexertion.');
  }

  // Activity tips
  const activityMinutes = data.activity * 10;
  if (activityMinutes < 15) {
    tips.push('Try to get at least 30 minutes of physical activity today. Even a brisk walk can boost your mood and energy levels.');
  } else if (activityMinutes >= 60) {
    tips.push('Excellent activity level! Remember to include rest days in your routine to allow your body to recover.');
  } else if (activityMinutes >= 30) {
    tips.push('Good job staying active! Keep up the momentum and consider varying your activities for balanced fitness.');
  }

  // Hydration tips
  if (data.hydration < 4) {
    tips.push('You need more water! Aim for at least 8 glasses daily. Set reminders or keep a water bottle nearby to stay hydrated.');
  } else if (data.hydration < 8) {
    tips.push('Increase your water intake to reach 8 glasses per day. Proper hydration supports energy, focus, and physical performance.');
  }

  // Mood tips
  if (data.mood <= 4) {
    tips.push('Your mood seems low today. Reach out to someone you trust, engage in an activity you enjoy, or consider speaking with a mental health professional.');
  } else if (data.mood >= 8) {
    tips.push('Your positive mood is wonderful! Keep doing what makes you happy and consider sharing your energy with others.');
  }

  // Ensure we always return 3-5 tips
  if (tips.length < 3) {
    tips.push('Maintain a balanced diet with plenty of fruits, vegetables, and whole grains to support overall health.');
    tips.push('Practice gratitude by writing down three things you\'re thankful for today.');
  }

  if (tips.length < 5) {
    tips.push('Take short breaks throughout your day to stretch and move, especially if you sit for long periods.');
  }

  return tips.slice(0, 5);
}

