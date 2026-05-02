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
        <span className={styles.heroTag}>Arquitetura · 3D · Cinema</span>

        <h1 className={styles.heroTitle}>
          ÂNDRIO<br />
          <span className={styles.heroTitleAccent}>VICARI</span>
        </h1>

        <p className={styles.heroSubtitle}>
          Layout 3D para filmes, publicidade e narrativas visuais
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
