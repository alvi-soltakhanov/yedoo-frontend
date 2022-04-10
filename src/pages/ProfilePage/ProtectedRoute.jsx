import { Navigate, Outlet } from "react-router-dom"

const ProtectedRoute = ({token, allowedRoles, role, children}) => {
    if (!token || !allowedRoles.includes(role)) {
        return <Navigate to="/" replace />
    }

    return children ? children : <Outlet context={{allowedRoles, role}} />
}

export default ProtectedRoute;