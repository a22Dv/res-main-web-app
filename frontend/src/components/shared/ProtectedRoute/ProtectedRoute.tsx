// Prop type interface.
interface ProtectedRouteProps {
    passedElement : React.ReactElement;
    auth : boolean;
}

// Main.
const ProtectedRoute = ({ passedElement, auth } : ProtectedRouteProps) => {

    // Returns the passed element only if auth evaluates to true. 
    // Otherwise sends a 401 Unauthorized error.
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

// Default export.
export default ProtectedRoute;