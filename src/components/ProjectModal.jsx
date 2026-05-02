import { useState, useEffect, useCallback } from 'react';
import styles from './ProjectModal.module.css';

export default function ProjectModal({ project, onClose }) {
  const [currentImage, setCurrentImage] = useState(0);

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') {
        setCurrentImage((prev) => (prev + 1) % project.images.length);
      }
      if (e.key === 'ArrowLeft') {
        setCurrentImage((prev) =>
          prev === 0 ? project.images.length - 1 : prev - 1
        );
      }
    },
    [onClose, project.images.length]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [handleKeyDown]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  const nextImage = () =>
    setCurrentImage((prev) => (prev + 1) % project.images.length);
  const prevImage = () =>
    setCurrentImage((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    );

  return (
    <div
      className={styles.modalBackdrop}
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-label={`Detalhes do projeto: ${project.title}`}
    >
      <div className={styles.modal}>
        {/* Close */}
        <button
          className={styles.closeBtn}
          onClick={onClose}
          aria-label="Fechar modal"
        >
          ✕
        </button>

        {/* Carousel */}
        <div className={styles.carousel}>
          <img
            src={project.images[currentImage]}
            alt={`${project.title} — imagem ${currentImage + 1}`}
            className={styles.carouselImage}
            width="1200"
            height="800"
          />

          {project.images.length > 1 && (
            <>
              <div className={styles.carouselControls}>
                <button
                  className={styles.carouselBtn}
                  onClick={prevImage}
                  aria-label="Imagem anterior"
                >
                  ←
                </button>
                <button
                  className={styles.carouselBtn}
                  onClick={nextImage}
                  aria-label="Próxima imagem"
                >
                  →
                </button>
              </div>

              <div className={styles.carouselDots}>
                {project.images.map((_, idx) => (
                  <button
                    key={idx}
                    className={`${styles.carouselDot} ${
                      idx === currentImage ? styles.active : ''
                    }`}
                    onClick={() => setCurrentImage(idx)}
                    aria-label={`Imagem ${idx + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Body */}
        <div className={styles.modalBody}>
          <span className={styles.modalTag}>{project.type}</span>
          <h2 className={styles.modalTitle}>{project.title}</h2>
          <p className={styles.modalDescription}>{project.description}</p>

          {/* Credits */}
          <div className={styles.creditsGrid}>
            <div>
              <div className={styles.creditLabel}>Cliente</div>
              <div className={styles.creditValue}>
                {project.credits.cliente}
              </div>
            </div>
            <div>
              <div className={styles.creditLabel}>Produtora</div>
              <div className={styles.creditValue}>
                {project.credits.produtora}
              </div>
            </div>
            <div>
              <div className={styles.creditLabel}>Diretor de Arte</div>
              <div className={styles.creditValue}>
                {project.credits.diretorDeArte}
              </div>
            </div>
            <div>
              <div className={styles.creditLabel}>Ano</div>
              <div className={styles.creditValue}>
                {project.credits.ano}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
