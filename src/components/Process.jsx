import { forwardRef } from 'react';
import { useInView } from '../hooks/useInView';
import styles from './Process.module.css';

const STEPS = [
  {
    number: '01',
    icon: '🎯',
    title: 'Briefing e Narrativa',
    description:
      'Entender a história, emoções-chave e requisitos do cliente. Alinhamento com diretor, produtora e equipe de arte.',
  },
  {
    number: '02',
    icon: '📐',
    title: 'Estudos de Espaço e Volumetria',
    description:
      'Blocagem inicial em 3D, teste de câmeras e análise de fluxos de movimento. Definição de escala e proporções do cenário.',
  },
  {
    number: '03',
    icon: '🖥️',
    title: 'Layout 3D e Iterações',
    description:
      'Refinamento do layout com feedback contínuo da equipe de arte e diretor. Simulação de iluminação e materiais.',
  },
  {
    number: '04',
    icon: '🚀',
    title: 'Entrega e Suporte',
    description:
      'Layout final otimizado para produção, com guias detalhados para equipe de construção virtual ou VFX.',
  },
];

const Process = forwardRef(function Process(_props, ref) {
  const [sectionRef, isVisible] = useInView({ threshold: 0.15 });

  return (
    <section ref={ref} id="process" className={styles.process} aria-label="Processo criativo">
      <div
        ref={sectionRef}
        className={`${styles.processInner} animate-on-scroll ${isVisible ? 'is-visible' : ''}`}
      >
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>Processo</span>
          <h2 className={styles.sectionTitle}>Do conceito ao layout final</h2>
          <p className={styles.sectionSubtitle}>
            Um fluxo estruturado que garante alinhamento criativo e técnico em cada etapa
          </p>
        </div>

        <div className={styles.timeline}>
          {STEPS.map((step) => (
            <div key={step.number} className={styles.step}>
              <div className={styles.stepNumber}>{step.number}</div>
              <span className={styles.stepIcon} aria-hidden="true">
                {step.icon}
              </span>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDescription}>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default Process;
