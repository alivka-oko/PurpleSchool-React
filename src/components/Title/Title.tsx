import styles from './Title.module.css';

function Title({ children }: { children: React.ReactNode }) {
  return <h1 className={styles['title']}> {children} </h1>;
}

export default Title;
