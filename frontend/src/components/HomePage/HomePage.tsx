// Import react components.
import Header from '../shared/Header/Header.tsx';
import NavBar from '../shared/NavBar/NavBar.tsx';

// Styling module.
import styles from './HomePage.module.css';

// Main entry.
const HomePage = () => {
    return (
        // Holds the entire page.
        <div className={styles.homePage}>
            {/*Holds the navigation bar. <div> wrapping is for the CSS to respect the flex style.
             Removing the div wrap will make the components overlap. DO NOT REMOVE.*/}
            <div>
                <NavBar/> 
            </div> 

            {/*Holds the content beside the navigation bar*/}
            <div className={styles.homePageContent}>

                {/*For the header. <div> wrapper is to prevent any styling issues.*/}
                <div>
                    <Header/>
                </div>

                {/*Holds the main content of the home page below the header.*/}
                <div className={styles.homePageMainContent}>
                </div>
            </div>
        </div>
    );
}

// Default export.
export default HomePage;