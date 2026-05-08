import styles from './Footer.module.scss';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        Dados fornecidos por{' '}
        <a
          className={styles.link}
          href="https://hp-api.onrender.com/"
          target="_blank"
          rel="noreferrer noopener"
        >
          HP-API
        </a>
        .
      </p>
    </footer>
  );
}
