import { Navigate } from 'react-router';
interface ProtectedRouteProps {
    passedElement : React.ReactElement;
    auth : boolean;
}
const ProtectedRoute = ({ passedElement, auth } : ProtectedRouteProps) => {
    return auth ? passedElement : <Navigate to='/home' replace/>;
}
export default ProtectedRoute;