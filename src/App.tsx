import { useEffect, useState } from 'react';
import './styles/global.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';

type Theme = 'light' | 'dark';

function getInitialTheme(): Theme {
  const stored = localStorage.getItem('theme') as Theme | null;
  if (stored === 'light' || stored === 'dark') return stored;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export default function App() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(t => (t === 'light' ? 'dark' : 'light'));

  return (
    <div>
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        {/* More sections will be added here */}
      </main>
    </div>
  );
}
