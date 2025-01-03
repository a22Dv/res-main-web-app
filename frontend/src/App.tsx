import { useState } from 'react';
import LoginPage from './components/LoginPage/LoginPage.tsx';
import Dashboard from './components/Dashboard/Dashboard.tsx';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [userInfo, setUserInfo] = useState<string[] | null>(null);

  const handleIsLoggedIn = (isLoggedIn : boolean) => {
    setIsLoggedIn(isLoggedIn);
  }
  const handleUserInfo = (userInfo : string[]) => {
    setUserInfo(userInfo);
  }
  if (isLoggedIn) {
    return (
      <Dashboard {...{ userInfo, handleIsLoggedIn }}/>
    );
  } else {
    return (
      <div>
        <LoginPage {...{ handleIsLoggedIn, handleUserInfo }} />
      </div>
    );
  }

}
export default App;