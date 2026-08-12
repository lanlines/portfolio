import { useEffect, useState } from 'react';
import './styles/global.css';

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
      {/* Components will be added here */}
      <p style={{ padding: '2rem', color: 'var(--fg)' }}>
        Foundation ready — theme: {theme}
        <button onClick={toggleTheme} style={{ marginLeft: '1rem' }}>toggle</button>
      </p>
    </div>
  );
}
