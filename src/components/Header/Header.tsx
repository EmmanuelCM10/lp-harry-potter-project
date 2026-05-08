import styles from './Header.module.scss';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <p className={styles.eyebrow}>Wizarding World</p>
        <h1 className={styles.title}>
          Personagens de <span className={styles.highlight}>Harry Potter</span>
        </h1>
        <p className={styles.subtitle}>
          Uma coletânea com bruxos, bruxas e criaturas mágicas com data de
          nascimento, casa, patrono, ator e status atual.
        </p>
      </div>
    </header>
  );
}
