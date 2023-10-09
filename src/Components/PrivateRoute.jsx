import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {userFinal} = useContext(AuthContext)
    const location = useLocation()
    console.log(location)
    if(userFinal){
       return children
    }
    
    return    <Navigate state={location.pathname} to="/login"></Navigate>
    
    return (
        <div>
            
        </div>
    );
};

export default PrivateRoute;