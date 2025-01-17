import styles from './ProfileDetailCell.module.css';
interface ProfileDetailCellProps {
    image : string;
    detail : string;
}
const ProfileDetailCell = ({image, detail} : ProfileDetailCellProps ) => {
    return (
        <div className={styles.cell}>
            <img src={image} className={styles.icon}/>
            <p>{detail}</p>
        </div>
    );
}
export default ProfileDetailCell;