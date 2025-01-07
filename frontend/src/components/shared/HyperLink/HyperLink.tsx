import styles from './HyperLink.module.css';
interface HyperLinkProps {
    url : string;
    showText? : string;
    fontSize? : number;
    color? : string;
    hoverColor? : string;
    fontFamily? : string;
}

const HyperLink = ({ url, showText=url, fontSize=1, color='var(--primary-color)', hoverColor='var(--secondary-color)', fontFamily='var(--primary-font)'} 
    : HyperLinkProps) => {
    const style = {
        '--link-font-size': `${fontSize}rem`,
        '--link-color': color,
        '--link-hover-color': hoverColor,
        '--link-font-family': fontFamily,
    } as React.CSSProperties;

    return (
        <>
            <a target='_blank' style={style} href={url} className={styles.hyperLink}>{showText}</a>
        </>
    );
}
export default HyperLink;