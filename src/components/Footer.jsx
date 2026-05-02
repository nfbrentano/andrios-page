import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.footerInner}>
        <p className={styles.footerBrand}>
          ÂNDRIO VICARI
        </p>
        <p className={styles.footerTagline}>
          Layout 3D para filmes, publicidade e narrativas visuais
        </p>
        <p className={styles.footerCopy}>
          © {currentYear} Ândrio Vicari<span className={styles.footerAccent}>.</span> Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
