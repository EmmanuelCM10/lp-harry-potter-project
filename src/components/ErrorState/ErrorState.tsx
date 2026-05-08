import styles from './ErrorState.module.scss';

interface ErrorStateProps {
  message: string;
  onRetry?: () => void;
}

export function ErrorState({ message, onRetry }: ErrorStateProps) {
  return (
    <div className={styles.wrapper} role="alert">
      <h2 className={styles.title}>Algo deu errado</h2>
      <p className={styles.message}>{message}</p>
      {onRetry && (
        <button type="button" className={styles.button} onClick={onRetry}>
          Tentar novamente
        </button>
      )}
    </div>
  );
}
