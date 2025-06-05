import styles from './Header.module.css';

function Header({ children }: { children: React.ReactNode }) {
  return (
    <header className={styles['header']}>
      <div className={styles['container']}>
        <img className={styles['logo']} src='/logo.svg'></img>
        {children}
      </div>
    </header>
  );
}

export default Header;
