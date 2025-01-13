import Header from '../shared/Header/Header.tsx';
import NavBar from '../shared/NavBar/NavBar.tsx';
import styles from './HomePage.module.css';

const LoginPage = () => {
    return (
        <div className={styles.homePage}>
            <div>
                <NavBar/> 
            </div> 
            <div className={styles.homePageContent}>
                <div>
                    <Header/>
                </div>
                <div className={styles.homePageMainContent}>
                    <h1>Test Home.</h1>   
                </div>
            </div>
        </div>
    );
}
export default LoginPage;