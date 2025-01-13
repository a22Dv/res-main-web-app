interface ProtectedRouteProps {
    passedElement : React.ReactElement;
    auth : boolean;
}
const ProtectedRoute = ({ passedElement, auth } : ProtectedRouteProps) => {
    return auth ? (
        passedElement
    ) :(
        <h1 style={{width: '100vw',
                    justifyContent: 'center', 
                    textAlign: 'center',
                    padding: '1rem',
                    fontSize: '3rem'}}>
        401 Unauthorized</h1>
    );
}
export default ProtectedRoute;