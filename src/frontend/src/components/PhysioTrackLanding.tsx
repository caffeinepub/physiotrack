import { useState } from 'react';
import { Activity, Heart, Lightbulb, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import DailyCheckIn from './DailyCheckIn';

export default function PhysioTrackLanding() {
  const [showCheckIn, setShowCheckIn] = useState(false);

  const scrollToCheckIn = () => {
    setShowCheckIn(true);
    setTimeout(() => {
      document.getElementById('daily-checkin')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

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
            <span className="text-xl font-display font-bold text-foreground">PhysioTrack</span>
          </div>
          <Button onClick={scrollToCheckIn} className="font-medium">
            Start Check-In
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight">
                Track Your Health,
                <span className="text-accent block">One Day at a Time</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                PhysioTrack helps you understand your daily wellness through simple check-ins. 
                Get personalized health scores and actionable tips to improve your physical and mental well-being.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" onClick={scrollToCheckIn} className="font-medium">
                  Take Your Daily Check-In
                </Button>
                <Button size="lg" variant="outline" onClick={() => {
                  document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
                }}>
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/assets/generated/physiotrack-hero.dim_1600x900.png" 
                alt="PhysioTrack Health Tracking" 
                className="rounded-2xl shadow-soft w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="how-it-works" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              How PhysioTrack Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Three simple steps to better understand and improve your daily health
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-accent/50 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <Activity className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="font-display">Daily Check-In</CardTitle>
                <CardDescription>
                  Answer quick questions about your sleep, stress, activity, hydration, and mood. 
                  Takes less than 2 minutes.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-display">Get Your Score</CardTitle>
                <CardDescription>
                  Receive a personalized health score from 0-100 based on your responses. 
                  See how you're doing today.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-chart-3/50 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-chart-3/10 flex items-center justify-center mb-4">
                  <Lightbulb className="h-6 w-6 text-chart-3" />
                </div>
                <CardTitle className="font-display">Personalized Tips</CardTitle>
                <CardDescription>
                  Get actionable recommendations tailored to your answers. 
                  Small changes that make a big difference.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Why Track Your Health Daily?
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 font-display text-lg">
                    <Heart className="h-5 w-5 text-accent" />
                    Build Awareness
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Understand patterns in your physical and mental well-being over time.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 font-display text-lg">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    Track Progress
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    See how lifestyle changes impact your daily health scores.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 font-display text-lg">
                    <Lightbulb className="h-5 w-5 text-chart-3" />
                    Get Guidance
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Receive personalized tips based on your unique daily experiences.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 font-display text-lg">
                    <Activity className="h-5 w-5 text-accent" />
                    Stay Consistent
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Quick daily check-ins help you stay committed to your wellness journey.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Daily Check-In Section */}
      {showCheckIn && (
        <section id="daily-checkin" className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <DailyCheckIn />
          </div>
        </section>
      )}

      {/* CTA Section */}
      {!showCheckIn && (
        <section className="py-16 md:py-24 bg-gradient-to-b from-background to-accent/5">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Ready to Start Your Wellness Journey?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Take your first daily check-in now and discover your health score.
            </p>
            <Button size="lg" onClick={scrollToCheckIn} className="font-medium">
              Start Your Check-In
            </Button>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="border-t py-8 mt-auto bg-card/50">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>
            © 2026. Built with <Heart className="inline h-4 w-4 text-accent" /> using{' '}
            <a 
              href="https://caffeine.ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground hover:text-accent transition-colors font-medium"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

