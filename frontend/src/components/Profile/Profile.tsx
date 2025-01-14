// TODO: FUNCTIONALITY MISSING. MUST RETRIEVE USER DETAILS FROM THE API / DATABASE.

// Import React Components.
import NavBar from '../shared/NavBar/NavBar';
import Header from '../shared/Header/Header';
import Button from '../shared/Button/Button';
import ProfileDetailCell from '../shared/ProfileDetailCell/ProfileDetailCell.tsx';

// Import CSS module.
import styles from './Profile.module.css';

// Import img/svg files for icons.
import locationLogo from '../../assets/map-pin-2-fill.svg';
import birthdayLogo from '../../assets/cake-2-fill.svg';
import nameLogo from '../../assets/id-card-fill.svg';
import sectionLogo from '../../assets/graduation-cap-fill.svg';
import userLogo from '../../assets/user.svg';

// Prop type interface.
interface ProfileProps {
    onLogOut : () => void;
}

// Main.
const Profile = ({ onLogOut } : ProfileProps) => {
    return (
        // Holds the entire page.
        <div className={styles.profile}>
            {/*Holds the navigation bar. <div> wrapped to avoid styling issues with Flexbox.*/}
            <div>
                <NavBar/>
            </div>

            {/*Holds the main page content aside from the nav bar.*/}
            <div className={styles.profileContent}>
                {/*Holds the header component. <div> wrapped to prevent any unforseen styling issues.*/}
                <div>
                    <Header/>
                </div>
                {/*Holds the section for displaying name/ID number/profile icon on top of the details.*/}
                <div className={styles.profilePicture}>
                    <img src={userLogo}/>
                    <div className={styles.profilePictureDetails}>
                        <h1>Dela Cruz, Juan A.</h1>
                        <p>12-3456-789</p>
                    </div>
                </div>
                {/*Holds the profile's main details.*/}
                <div className={styles.profileMainContent}>
                    <ProfileDetailCell image={nameLogo} detail='Dela Cruz, Juan A.'/>
                    <ProfileDetailCell image={sectionLogo} detail='12 - Enthusiasm'/>
                    <ProfileDetailCell image={birthdayLogo} detail='January 13, 2025'/>
                    <ProfileDetailCell image={locationLogo} detail='Natalio B. Bacalso Ave., Cebu City, 6000 Cebu'/>
                </div>
                {/*For the sign-out button. <div> wrapped to make it easier to place on one side.*/}
                <div className={styles.buttonContainer}>
                    <Button onClick={onLogOut} displayText='Sign Out' padding={1.5} fontSize={1.5}/>
                </div>
            </div>
        </div>
    );
}

// Default export.
export default Profile;