import { useState } from 'react';
import PhysioTrackLanding from './components/PhysioTrackLanding';
import QuizPage from './components/QuizPage';

type View = 'landing' | 'quiz';

function App() {
  const [currentView, setCurrentView] = useState<View>('landing');

  return (
    <>
      {currentView === 'landing' && (
        <PhysioTrackLanding onNavigateToQuiz={() => setCurrentView('quiz')} />
      )}
      {currentView === 'quiz' && (
        <QuizPage onNavigateToLanding={() => setCurrentView('landing')} />
      )}
    </>
  );
}

export default App;
