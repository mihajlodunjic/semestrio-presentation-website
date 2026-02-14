import { useEffect, useState } from 'react';
import { LegalModal } from './components/LegalModal';
import { Navbar } from './components/Navbar';
import { applyTheme, getInitialTheme, toggleTheme, type ThemeMode } from './lib/theme';
import { Contact } from './sections/Contact';
import { FAQ } from './sections/FAQ';
import { Features } from './sections/Features';
import { Footer } from './sections/Footer';
import { Hero } from './sections/Hero';
import { HowItWorks } from './sections/HowItWorks';
import { Pricing } from './sections/Pricing';
import { ProblemSolution } from './sections/ProblemSolution';
import { Roles } from './sections/Roles';
import { SeasonModel } from './sections/SeasonModel';

interface LegalState {
  open: boolean;
  type: 'privacy' | 'terms';
}

function App() {
  const [theme, setTheme] = useState<ThemeMode>(() => getInitialTheme());
  const [legalState, setLegalState] = useState<LegalState>({ open: false, type: 'privacy' });

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const handleThemeToggle = () => {
    setTheme((current) => toggleTheme(current));
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-surface text-primary">
      <Navbar theme={theme} onToggleTheme={handleThemeToggle} />
      <main>
        <Hero />
        <ProblemSolution />
        <HowItWorks />
        <Features />
        <Roles />
        <SeasonModel />
        <Pricing />
        <FAQ />
        <Contact />
      </main>
      <Footer onOpenLegal={(type) => setLegalState({ open: true, type })} />

      <LegalModal
        open={legalState.open}
        type={legalState.type}
        onClose={() => setLegalState((state) => ({ ...state, open: false }))}
      />
    </div>
  );
}

export default App;
