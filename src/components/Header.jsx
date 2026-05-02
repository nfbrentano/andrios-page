import { useState, useEffect } from 'react';
import styles from './Header.module.css';

const NAV_ITEMS = [
  { label: 'Início', target: 'hero' },
  { label: 'Sobre', target: 'about' },
  { label: 'Trabalhos', target: 'projects' },
  { label: 'Processo', target: 'process' },
  { label: 'Contato', target: 'contact' },
];

export default function Header({ onNavigate }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  const handleNavClick = (target) => {
    setIsMenuOpen(false);
    onNavigate(target);
  };

  return (
    <header
      className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}
      role="banner"
    >
      <div className={styles.headerInner}>
        <a
          href="#hero"
          className={styles.logo}
          onClick={(e) => { e.preventDefault(); handleNavClick('hero'); }}
          aria-label="Ir para o início"
        >
          ÂNDRIO<span className={styles.logoAccent}>.</span>
        </a>

        {/* Desktop nav */}
        <nav className={styles.nav} aria-label="Navegação principal">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.target}
              href={`#${item.target}`}
              className={styles.navLink}
              onClick={(e) => { e.preventDefault(); handleNavClick(item.target); }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Hamburger */}
        <button
          className={`${styles.hamburger} ${isMenuOpen ? styles.open : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isMenuOpen}
        >
          <span className={styles.hamburgerLine} />
          <span className={styles.hamburgerLine} />
          <span className={styles.hamburgerLine} />
        </button>
      </div>

      {/* Mobile overlay */}
      <div
        className={`${styles.mobileOverlay} ${isMenuOpen ? styles.open : ''}`}
        aria-hidden={!isMenuOpen}
      >
        <nav aria-label="Menu mobile">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.target}
              href={`#${item.target}`}
              className={styles.mobileNavLink}
              onClick={(e) => { e.preventDefault(); handleNavClick(item.target); }}
              tabIndex={isMenuOpen ? 0 : -1}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
