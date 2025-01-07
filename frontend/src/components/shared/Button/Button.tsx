import styles from './Button.module.css';

interface ButtonProps<T> {
  text: string;
  onClick: () => T;
}

const Button = <T,>({ text, onClick }: ButtonProps<T>) => {
  const handleClick = () => {
    const result = onClick();
    console.log('Callback result:', result);
    return result;
  };
  return <button className={styles.button} onClick={handleClick}>{text}</button>;
};

export default Button;
