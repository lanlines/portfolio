import { useState } from 'react';
import styles from './Navbar.module.css';

type Theme = 'light' | 'dark';

interface NavbarProps {
  theme: Theme;
  onToggleTheme: () => void;
}

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ theme, onToggleTheme }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <a href="#home" className={styles.logo} onClick={closeMenu}>
          LJL
        </a>

        <ul className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
          {links.map(({ label, href }) => (
            <li key={href}>
              <a href={href} className={styles.link} onClick={closeMenu}>
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className={styles.actions}>
          <button
            className={styles.themeToggle}
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? '☽' : '○'}
          </button>

          <button
            className={styles.menuToggle}
            onClick={() => setMenuOpen(o => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span className={`${styles.bar} ${menuOpen ? styles.barOpen : ''}`} />
            <span className={`${styles.bar} ${menuOpen ? styles.barOpen : ''}`} />
            <span className={`${styles.bar} ${menuOpen ? styles.barOpen : ''}`} />
          </button>
        </div>
      </nav>
    </header>
  );
}
