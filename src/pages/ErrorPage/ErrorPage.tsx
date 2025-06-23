import styles from './ErrorPage.module.css';
export function ErrorPage({ message }: { message?: string }) {
  return (
    <div className={styles['error-page']}>
      <div className={styles['error']}>Произошла ошибка</div>
      <div className={styles['message']}>{message}</div>
    </div>
  );
}
