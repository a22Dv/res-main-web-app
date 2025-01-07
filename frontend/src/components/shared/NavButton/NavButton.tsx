import styles from './NavButton.module.css';

interface NavButtonProps<T> {
    iconSource: string;
    text: string;
    onClick: (pageValue : number) => T;
    pageValue: number;
}
const NavButton = <T,>({ iconSource, text, onClick, pageValue } : NavButtonProps<T>) => {
    const handleClick = () => {
        const result = onClick(pageValue);
        console.log('Callback result:', result);
        return result;
    };
    return (
        <div className={styles.navButtonContainer}>
            <button className={styles.navButton} onClick={handleClick}>
                <img src={iconSource} className={styles.logo}></img>
                <p>{text}</p>
            </button>
        </div>
    );
}
export default NavButton;