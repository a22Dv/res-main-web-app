import styles from './HyperLink.module.css';

interface HyperLinkProps {
    url: string;
    displayText?: string;
    fontSize? : number;
    isNewTab? : boolean;
    padding? : number;
}
const HyperLink = ({url, displayText, fontSize, isNewTab, padding} : HyperLinkProps) => {
    return (
        <a style={{fontSize: `${fontSize}rem`, padding: `${padding}rem`}} 
            className={styles.a}
            href={url} 
            target={isNewTab ? '_blank' : '_self'}>
            {displayText}
        </a> 
    );
}
HyperLink.defaultProps = {
    displayText: '',
    fontSize: 1.5,
    isNewTab: true,
    padding: 2
};

export default HyperLink;