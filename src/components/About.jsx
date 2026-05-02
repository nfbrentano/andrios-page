import { forwardRef } from 'react';
import { useInView } from '../hooks/useInView';
import styles from './About.module.css';

const About = forwardRef(function About(_props, ref) {
  const [sectionRef, isVisible] = useInView({ threshold: 0.15 });

  return (
    <section ref={ref} id="about" className={styles.about} aria-label="Sobre Ândrio Vicari">
      <div
        ref={sectionRef}
        className={`${styles.aboutInner} animate-on-scroll ${isVisible ? 'is-visible' : ''}`}
      >
        {/* Text */}
        <div className={styles.aboutText}>
          <span className={styles.sectionLabel}>Sobre</span>
          <h2 className={styles.sectionTitle}>
            Do espaço construído ao espaço imaginado
          </h2>

          <p className={styles.aboutParagraph}>
            Formado em <span className={styles.aboutHighlight}>Arquitetura e Urbanismo</span>,
            encontrei na interseção entre arquitetura e cinema o meu campo de atuação.
            Hoje, concebo layouts e cenografias 3D que dão forma às histórias contadas em
            filmes, campanhas publicitárias e projetos audiovisuais.
          </p>

          <p className={styles.aboutParagraph}>
            Meu trabalho começa onde a narrativa encontra o espaço. A partir do briefing
            criativo, desenvolvo blocagens tridimensionais, estudo volumetrias, defino
            fluxos de câmera e simulo iluminações — tudo para que a equipe de produção
            tenha um mapa preciso do cenário antes da construção.
          </p>

          <p className={styles.aboutParagraph}>
            Colaboro de perto com <span className={styles.aboutHighlight}>diretores de arte,
            produtoras e marcas</span>, traduzindo conceitos abstratos em ambientes virtuais
            que servem à história e à estética de cada projeto.
          </p>

          {/* Stats */}
          <div className={styles.aboutStats}>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>50+</div>
              <div className={styles.statLabel}>Projetos</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>8</div>
              <div className={styles.statLabel}>Anos</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>20+</div>
              <div className={styles.statLabel}>Colaborações</div>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className={styles.aboutImageWrapper}>
          {/* TODO: Substituir pela foto real do Ândrio ou do processo de trabalho */}
          <img
            src="https://picsum.photos/seed/andrio-about/800/1000"
            alt="Ândrio Vicari em processo de trabalho com layout 3D"
            className={styles.aboutImage}
            loading="lazy"
            width="800"
            height="1000"
          />
          <div className={styles.aboutImageDecor} aria-hidden="true" />
          <div className={styles.aboutImageDecorBottom} aria-hidden="true" />
        </div>
      </div>
    </section>
  );
});

export default About;
