import { Navigate, Outlet } from "react-router-dom"

const AuthRoutes = () => {
  const userDetails = localStorage.getItem("pminToken")

  return !userDetails ? <Outlet /> : <Navigate to={"/"} />
}

export default AuthRoutes
