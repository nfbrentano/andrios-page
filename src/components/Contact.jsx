import { useState, forwardRef } from 'react';
import { useInView } from '../hooks/useInView';
import styles from './Contact.module.css';

const Contact = forwardRef(function Contact(_props, ref) {
  const [sectionRef, isVisible] = useInView({ threshold: 0.15 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    /**
     * TODO: Conectar a um serviço backend para envio de e-mails.
     * Opções sugeridas:
     *   - Formspree (https://formspree.io)
     *   - EmailJS (https://emailjs.com)
     *   - Função serverless (Supabase Edge Function, Vercel Function, etc.)
     *
     * Exemplo com Formspree:
     *   fetch('https://formspree.io/f/YOUR_FORM_ID', {
     *     method: 'POST',
     *     headers: { 'Content-Type': 'application/json' },
     *     body: JSON.stringify(formData),
     *   });
     */

    // Simular envio
    setSubmitted(true);
    setFormData({ name: '', email: '', projectType: '', message: '' });
  };

  return (
    <section ref={ref} id="contact" className={styles.contact} aria-label="Contato">
      <div
        ref={sectionRef}
        className={`${styles.contactInner} animate-on-scroll ${isVisible ? 'is-visible' : ''}`}
      >
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>Contato</span>
          <h2 className={styles.sectionTitle}>Vamos conversar</h2>
          <p className={styles.sectionSubtitle}>
            Tem um projeto que precisa de layout 3D? Adoraria saber mais.
          </p>
        </div>

        {submitted ? (
          <div className={styles.successMsg} role="alert">
            <span className={styles.successIcon}>✓</span>
            <h3 className={styles.successTitle}>Mensagem enviada!</h3>
            <p className={styles.successText}>
              Em breve retorno. Obrigado pelo interesse.
            </p>
          </div>
        ) : (
          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="contact-name" className={styles.formLabel}>
                  Nome
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  className={styles.formInput}
                  placeholder="Seu nome"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  autoComplete="name"
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="contact-email" className={styles.formLabel}>
                  Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  className={styles.formInput}
                  placeholder="seu@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  autoComplete="email"
                />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="contact-type" className={styles.formLabel}>
                Tipo de projeto
              </label>
              <select
                id="contact-type"
                name="projectType"
                className={styles.formSelect}
                value={formData.projectType}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Selecione o tipo
                </option>
                <option value="Filme">Filme</option>
                <option value="Publicidade">Publicidade</option>
                <option value="Institucional">Institucional</option>
                <option value="Outros">Outros</option>
              </select>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="contact-message" className={styles.formLabel}>
                Mensagem
              </label>
              <textarea
                id="contact-message"
                name="message"
                className={styles.formTextarea}
                placeholder="Conte sobre o seu projeto..."
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
              />
            </div>

            <button type="submit" className={styles.submitBtn}>
              Enviar mensagem
            </button>
          </form>
        )}

        {/* Social links */}
        <div className={styles.socialLinks}>
          {/* TODO: Substituir pelos links reais do Ândrio */}
          <a
            href="https://instagram.com/andriovicari"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            aria-label="Instagram do Ândrio Vicari"
          >
            <span className={styles.socialIcon}>📷</span>
            Instagram
          </a>
          <a
            href="https://linkedin.com/in/andriovicari"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            aria-label="LinkedIn do Ândrio Vicari"
          >
            <span className={styles.socialIcon}>💼</span>
            LinkedIn
          </a>
          <a
            href="mailto:contato@andriovicari.com"
            className={styles.socialLink}
            aria-label="Enviar email para Ândrio Vicari"
          >
            <span className={styles.socialIcon}>✉️</span>
            contato@andriovicari.com
          </a>
        </div>
      </div>
    </section>
  );
});

export default Contact;
