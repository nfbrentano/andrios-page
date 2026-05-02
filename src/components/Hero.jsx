import { forwardRef } from 'react';
import HeroScene from './HeroScene';
import styles from './Hero.module.css';

const Hero = forwardRef(function Hero({ onNavigate }, ref) {
  return (
    <section ref={ref} id="hero" className={styles.hero} aria-label="Apresentação">
      {/* 3D Background Scene */}
      <HeroScene />

      {/* Grid decoration overlay */}
      <div className={styles.heroGrid} aria-hidden="true" />

      {/* Content */}
      <div className={styles.heroContent}>
        <span className={styles.heroTag} style={{ opacity: 0, animation: 'fadeUp 1s ease forwards' }}>Arquitetura · 3D · Cinema</span>

        <h1 className={styles.heroTitle}>
          <span className={styles.revealWrapper}>
            <span className={`${styles.revealText} ${styles.delay1}`}>ÂNDRIO</span>
          </span>
          <br />
          <span className={styles.revealWrapper}>
            <span className={`${styles.revealText} ${styles.delay2} ${styles.heroTitleAccent}`}>VICARI</span>
          </span>
        </h1>

        <p className={styles.heroSubtitle}>
          <span className={styles.revealWrapper}>
            <span className={`${styles.revealText} ${styles.delay3}`}>
              Layout 3D para filmes, publicidade e narrativas visuais
            </span>
          </span>
        </p>

        <p className={styles.heroDescription}>
          Arquiteto de formação e criador de layouts tridimensionais para produções
          audiovisuais. Traduzo histórias em espaços virtuais — do conceito à
          cenografia final — colaborando com diretores de arte, produtoras e marcas.
        </p>

        <button
          className={styles.heroCta}
          onClick={() => onNavigate('projects')}
          aria-label="Ver portfólio de trabalhos"
          onMouseMove={(e) => {
            const rect = e.target.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            e.target.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = '';
          }}
        >
          Ver trabalhos
          <span className={styles.heroCtaArrow} aria-hidden="true">↓</span>
        </button>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollIndicator} aria-hidden="true">
        <div className={styles.scrollLine} />
      </div>
    </section>
  );
});

export default Hero;
