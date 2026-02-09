import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { calculateHealthScore, generateTips } from '@/lib/scoring';
import { CheckCircle2, RotateCcw, TrendingUp } from 'lucide-react';

interface CheckInData {
  sleep: number;
  stress: number;
  pain: number;
  activity: number;
  hydration: number;
  mood: number;
}

export default function DailyCheckIn() {
  const [formData, setFormData] = useState<CheckInData>({
    sleep: 7,
    stress: 5,
    pain: 3,
    activity: 5,
    hydration: 6,
    mood: 7
  });

  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState<number | null>(null);
  const [tips, setTips] = useState<string[]>([]);

  const handleSliderChange = (field: keyof CheckInData, value: number[]) => {
    setFormData(prev => ({ ...prev, [field]: value[0] }));
  };

  const handleSubmit = () => {
    const healthScore = calculateHealthScore(formData);
    const personalizedTips = generateTips(formData);
    
    setScore(healthScore);
    setTips(personalizedTips);
    setSubmitted(true);
  };

  const handleRetake = () => {
    setSubmitted(false);
    setScore(null);
    setTips([]);
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-accent';
    if (score >= 60) return 'text-chart-3';
    if (score >= 40) return 'text-primary';
    return 'text-destructive';
  };

  const getScoreLabel = (score: number) => {
    if (score >= 80) return 'Excellent';
    if (score >= 60) return 'Good';
    if (score >= 40) return 'Fair';
    return 'Needs Attention';
  };

  if (submitted && score !== null) {
    return (
      <div className="max-w-3xl mx-auto space-y-6 animate-fade-in">
        <Card className="border-2">
          <CardHeader className="text-center pb-4">
            <div className="flex justify-center mb-4">
              <div className="w-32 h-32 rounded-full bg-accent/10 flex items-center justify-center">
                <div className="text-center">
                  <div className={`text-5xl font-display font-bold ${getScoreColor(score)}`}>
                    {score}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">out of 100</div>
                </div>
              </div>
            </div>
            <CardTitle className="text-3xl font-display">
              Your Health Score: <span className={getScoreColor(score)}>{getScoreLabel(score)}</span>
            </CardTitle>
            <CardDescription className="text-base">
              Based on your daily check-in responses
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="border-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-display">
              <TrendingUp className="h-5 w-5 text-accent" />
              Personalized Tips for You
            </CardTitle>
            <CardDescription>
              Here are some recommendations to help improve your wellness
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {tips.map((tip, index) => (
                <li key={index} className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground leading-relaxed">{tip}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <div className="flex justify-center">
          <Button onClick={handleRetake} variant="outline" size="lg" className="gap-2">
            <RotateCcw className="h-4 w-4" />
            Retake Check-In
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      <Card className="border-2">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-display">Daily Check-In</CardTitle>
          <CardDescription className="text-base">
            Answer these questions about your day. Move the sliders to reflect how you're feeling.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          {/* Sleep */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <Label htmlFor="sleep" className="text-base font-medium">
                Hours of Sleep Last Night
              </Label>
              <span className="text-sm font-semibold text-accent">
                {formData.sleep} hours
              </span>
            </div>
            <Slider
              id="sleep"
              min={0}
              max={12}
              step={0.5}
              value={[formData.sleep]}
              onValueChange={(value) => handleSliderChange('sleep', value)}
              className="cursor-pointer"
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>0h</span>
              <span>12h</span>
            </div>
          </div>

          {/* Stress */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <Label htmlFor="stress" className="text-base font-medium">
                Stress Level
              </Label>
              <span className="text-sm font-semibold text-accent">
                {formData.stress}/10
              </span>
            </div>
            <Slider
              id="stress"
              min={1}
              max={10}
              step={1}
              value={[formData.stress]}
              onValueChange={(value) => handleSliderChange('stress', value)}
              className="cursor-pointer"
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Low (1)</span>
              <span>High (10)</span>
            </div>
          </div>

          {/* Pain/Soreness */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <Label htmlFor="pain" className="text-base font-medium">
                Pain or Soreness
              </Label>
              <span className="text-sm font-semibold text-accent">
                {formData.pain}/10
              </span>
            </div>
            <Slider
              id="pain"
              min={0}
              max={10}
              step={1}
              value={[formData.pain]}
              onValueChange={(value) => handleSliderChange('pain', value)}
              className="cursor-pointer"
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>None (0)</span>
              <span>Severe (10)</span>
            </div>
          </div>

          {/* Activity */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <Label htmlFor="activity" className="text-base font-medium">
                Physical Activity (minutes)
              </Label>
              <span className="text-sm font-semibold text-accent">
                {formData.activity * 10} min
              </span>
            </div>
            <Slider
              id="activity"
              min={0}
              max={12}
              step={1}
              value={[formData.activity]}
              onValueChange={(value) => handleSliderChange('activity', value)}
              className="cursor-pointer"
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>0 min</span>
              <span>120+ min</span>
            </div>
          </div>

          {/* Hydration */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <Label htmlFor="hydration" className="text-base font-medium">
                Glasses of Water
              </Label>
              <span className="text-sm font-semibold text-accent">
                {formData.hydration} glasses
              </span>
            </div>
            <Slider
              id="hydration"
              min={0}
              max={12}
              step={1}
              value={[formData.hydration]}
              onValueChange={(value) => handleSliderChange('hydration', value)}
              className="cursor-pointer"
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>0</span>
              <span>12+</span>
            </div>
          </div>

          {/* Mood */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <Label htmlFor="mood" className="text-base font-medium">
                Overall Mood
              </Label>
              <span className="text-sm font-semibold text-accent">
                {formData.mood}/10
              </span>
            </div>
            <Slider
              id="mood"
              min={1}
              max={10}
              step={1}
              value={[formData.mood]}
              onValueChange={(value) => handleSliderChange('mood', value)}
              className="cursor-pointer"
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Poor (1)</span>
              <span>Great (10)</span>
            </div>
          </div>

          <Button onClick={handleSubmit} size="lg" className="w-full font-medium">
            Calculate My Health Score
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

