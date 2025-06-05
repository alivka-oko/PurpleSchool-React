import styles from './Button.module.css';
import { ButtonProps } from './ButtonProps';

function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button
      className={
        className ? `${className} ${styles['button']}` : styles['button']
      }
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
