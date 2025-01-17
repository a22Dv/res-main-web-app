// React imports.
import { useState } from 'react';
import { Route, Routes, useNavigate, Navigate } from 'react-router';

// Website page imports.
import LoginPage from './components/LoginPage/LoginPage.tsx';
import HomePage from './components/HomePage/HomePage.tsx';
import TaskList from './components/TaskList/TaskList.tsx';
import Profile from './components/Profile/Profile.tsx';

// Routing / Mock API imports.
import ProtectedRoute from './components/shared/ProtectedRoute/ProtectedRoute.tsx';
import { AuthenticationAPI } from '../../backend/mock/API/API.ts';

// Main entry point.
const App = () => {

  // Mock authentication state variable. May be subject to change.
  const [isAuth, setIsAuth] = useState<boolean>(false);

  // For navigation.
  const navigate = useNavigate();

  // Handle authentication. Only handles mock API interactions. May be subject to change.
  const handleAuth = ({ studentID,  password } : handleAuthProps) : boolean => {
    if (AuthenticationAPI(studentID, password)) {
      setIsAuth(true);
      navigate('/home')
      return true;
    } else {
      setIsAuth(false);
      navigate('/login');
      return false;
    }
  }

  // Handle log out. May be subject to change depending on type of authentication implemented.
  // Will be changed if token-based authentication will be used.
  const handleLogOut = () => {
    setIsAuth(false);
    navigate('/login');
  }

  // JSX.
  return (

    // All web-application routes.
    <Routes>

      {/*Open routes.*/}
      <Route path='/' element={<Navigate to='/login' replace/>}/>
      <Route path='/login' element={<LoginPage onAuth={handleAuth}/>}/>  

      {/*Following routes are protected. Can only be accessed if logged in.*/}
      <Route
        path='/home'
        element={<ProtectedRoute auth={isAuth} passedElement={<HomePage/>}/>}
      />
      <Route
        path='/tasklist'
        element={<ProtectedRoute auth={isAuth} passedElement={<TaskList/>}/>}
      />
      <Route
        path='/profile'
        element={<ProtectedRoute auth={isAuth} passedElement={<Profile onLogOut={handleLogOut}/>}/>}
      />
    </Routes>
    
  );
}

// Define property types for handleAuth().
// Is currently expoeted for LoginPage component to handle callback type.
export interface handleAuthProps {
  studentID : string | undefined;
  password : string | undefined;
}

// Default export.
export default App;