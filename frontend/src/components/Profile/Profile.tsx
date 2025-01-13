// TODO: FUNCTIONALITY MISSING. MUST RETRIEVE USER DETAILS FROM THE API / DATABASE.

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
                <div>
                    <Header/>
                </div>
                <div className={styles.profilePicture}>
                    <img src={userLogo}/>
                    <div className={styles.profilePictureDetails}>
                        <h1>Dela Cruz, Juan A.</h1>
                        <p>12-3456-789</p>
                    </div>
                </div>
                <div className={styles.profileMainContent}>
                    <ProfileDetailCell image={nameLogo} detail='Dela Cruz, Juan A.'/>
                    <ProfileDetailCell image={sectionLogo} detail='12 - Enthusiasm'/>
                    <ProfileDetailCell image={birthdayLogo} detail='January 13, 2025'/>
                    <ProfileDetailCell image={locationLogo} detail='Natalio B. Bacalso Ave., Cebu City, 6000 Cebu'/>
                </div>
                <div className={styles.buttonContainer}>
                    <Button onClick={onLogOut} displayText='Sign Out' padding={1.5} fontSize={1.5}/>
                </div>
            </div>
        </div>
    );
}
export default Profile;