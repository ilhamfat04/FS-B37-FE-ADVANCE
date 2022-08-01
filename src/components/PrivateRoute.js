// import necessary utility from rrd
import { Outlet, Navigate } from "react-router-dom";

// create component here
const PrivateRoute = () => {
    const isSignIn = false

    return (
        isSignIn ? <Outlet /> : <Navigate to="/signin" />
    )
}

export default PrivateRoute