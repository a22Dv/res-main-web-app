import styles from './Button.module.css';

interface ButtonProps {
    onClick: () => any;
    displayText: string;
    padding?: number;
    fontSize?: number;
    height? : string;
    width? : string;
    margin? : string;
}
const Button = ({ onClick, displayText, padding, fontSize, height, width, margin} : ButtonProps) => {
    const handleClick = (event : React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        onClick();
    }
    return (
        <button onClick={handleClick}
            style={{fontSize: `${fontSize}rem`, 
                    padding: `${padding}rem`,
                    height: height,
                    width: width,
                    margin: margin}}
            className={styles.button}
        >
            {displayText}
        </button>
    ); 
}
Button.defaultProps = {
    fontSize: 2,
    padding: 1,
    height: 'auto',
    width: 'auto',
    margin: 'none'
}
export default Button;