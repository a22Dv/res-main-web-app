import NavBar from '../shared/NavBar/NavBar';
import Header from '../shared/Header/Header';
import Button from '../shared/Button/Button';
import styles from './Profile.module.css';
import locationLogo from '../../assets/map-pin-2-fill.svg';
import birthdayLogo from '../../assets/cake-2-fill.svg';
import nameLogo from '../../assets/id-card-fill.svg';
import sectionLogo from '../../assets/graduation-cap-fill.svg';
import userLogo from '../../assets/user.svg';

import ProfileDetailCell from '../shared/ProfileDetailCell/ProfileDetailCell.tsx';



interface ProfileProps {
    onLogOut : () => void;
}
const Profile = ({ onLogOut } : ProfileProps) => {
    return (
        <div className={styles.profile}>
            <div>
                <NavBar/>
            </div>
            <div className={styles.profileContent}>
                <Header/>
                <div className={styles.profileMainContent}>
                    <ProfileDetailCell image={locationLogo} detail='Natalio B. Bacalso Ave., Cebu City, 6000 Cebu'/>
                </div>
            </div>
        </div>
    );
}
export default Profile;