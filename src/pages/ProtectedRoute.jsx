import { useContext } from "react";
import { AuthContext } from "../Firebase/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext)
    const location = useLocation()
    console.log(location.pathname)

    console.log(loading)
    if(loading) {
        return <div className="flex items-center justify-center my-[150px]">
            <div className="md:w-28 md:h-28 w-12 h-12 border-4 border-dashed rounded-full animate-spin border-primary"></div>
        </div>
       
    }

    if (user) {
        return children
    }

    return <Navigate  state={location.pathname} to='/signIn'></Navigate>
};

export default ProtectedRoute;