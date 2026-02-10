import { useState, useEffect } from 'react';
import { ArrowLeft, CheckCircle2, XCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { getRandomQuestions, calculateQuizScore, getQuizTips, type QuizQuestion } from '@/lib/quiz';
import FooterAttribution from './FooterAttribution';

interface QuizPageProps {
  onNavigateToLanding: () => void;
}

export default function QuizPage({ onNavigateToLanding }: QuizPageProps) {
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [tips, setTips] = useState<string[]>([]);

  useEffect(() => {
    startQuiz();
  }, []);

  const startQuiz = () => {
    const randomQuestions = getRandomQuestions();
    setQuestions(randomQuestions);
    setAnswers({});
    setSubmitted(false);
    setScore(0);
    setTips([]);
  };

  const handleAnswerChange = (questionIndex: number, answerIndex: number) => {
    setAnswers(prev => ({
      ...prev,
      [questionIndex]: answerIndex
    }));
  };

  const handleSubmit = () => {
    const calculatedScore = calculateQuizScore(questions, answers);
    const generatedTips = getQuizTips(calculatedScore);
    setScore(calculatedScore);
    setTips(generatedTips);
    setSubmitted(true);
    
    // Scroll to results
    setTimeout(() => {
      document.getElementById('quiz-results')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const allQuestionsAnswered = questions.length > 0 && questions.every((_, index) => answers[index] !== undefined);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="/assets/generated/physiotrack-mark.dim_512x512.png" 
              alt="PhysioTrack" 
              className="h-10 w-10 rounded-lg"
            />
            <span className="text-xl font-display font-bold text-foreground">PhysioTrack Quiz</span>
          </div>
          <Button onClick={onNavigateToLanding} variant="outline" className="font-medium">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          {!submitted ? (
            <>
              <div className="text-center mb-12">
                <h1 className="text-3xl md:text-4xl font-display font-bold mb-4">
                  Health & Wellness Quiz
                </h1>
                <p className="text-lg text-muted-foreground">
                  Test your knowledge about health and wellness. Answer all questions to get your score and personalized tips!
                </p>
              </div>

              <div className="space-y-6">
                {questions.map((question, qIndex) => (
                  <Card key={qIndex} className="border-2">
                    <CardHeader>
                      <CardTitle className="font-display text-lg">
                        Question {qIndex + 1}
                      </CardTitle>
                      <CardDescription className="text-base text-foreground">
                        {question.question}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <RadioGroup
                        value={answers[qIndex]?.toString()}
                        onValueChange={(value) => handleAnswerChange(qIndex, parseInt(value))}
                      >
                        {question.options.map((option, oIndex) => (
                          <div key={oIndex} className="flex items-center space-x-2 mb-3">
                            <RadioGroupItem value={oIndex.toString()} id={`q${qIndex}-o${oIndex}`} />
                            <Label 
                              htmlFor={`q${qIndex}-o${oIndex}`}
                              className="cursor-pointer text-base font-normal"
                            >
                              {option}
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-8 text-center">
                <Button 
                  size="lg" 
                  onClick={handleSubmit}
                  disabled={!allQuestionsAnswered}
                  className="font-medium"
                >
                  Submit Quiz
                </Button>
                {!allQuestionsAnswered && (
                  <p className="text-sm text-muted-foreground mt-3">
                    Please answer all questions before submitting
                  </p>
                )}
              </div>
            </>
          ) : (
            <div id="quiz-results" className="space-y-8">
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                  Quiz Complete!
                </h2>
              </div>

              {/* Score Card */}
              <Card className="border-2 border-primary/50 bg-gradient-to-br from-primary/5 to-accent/5">
                <CardHeader className="text-center pb-4">
                  <CardTitle className="font-display text-2xl mb-2">Your Score</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-6xl font-display font-bold text-primary mb-4">
                    {score}%
                  </div>
                  <p className="text-lg text-muted-foreground">
                    {score >= 80 ? 'Excellent work!' : score >= 60 ? 'Good job!' : score >= 40 ? 'Not bad!' : 'Keep learning!'}
                  </p>
                </CardContent>
              </Card>

              {/* Tips Section */}
              <div>
                <h3 className="text-2xl font-display font-bold mb-4 text-center">
                  Personalized Tips for You
                </h3>
                <div className="space-y-4">
                  {tips.map((tip, index) => (
                    <Card key={index} className="border-2">
                      <CardContent className="pt-6">
                        <div className="flex gap-3">
                          {score >= 60 ? (
                            <CheckCircle2 className="h-6 w-6 text-chart-3 flex-shrink-0 mt-0.5" />
                          ) : (
                            <XCircle className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                          )}
                          <p className="text-base leading-relaxed">{tip}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" onClick={startQuiz} className="font-medium">
                  Retake Quiz
                </Button>
                <Button size="lg" variant="outline" onClick={onNavigateToLanding} className="font-medium">
                  Back to Home
                </Button>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <FooterAttribution />
    </div>
  );
}
