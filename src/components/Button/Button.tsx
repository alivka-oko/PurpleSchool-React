import styles from './Button.module.css';
import { ButtonProps } from './ButtonProps';
import cn from 'classnames';

function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button className={cn(styles['button'], className)} {...props}>
      {children}
    </button>
  );
}

export default Button;
