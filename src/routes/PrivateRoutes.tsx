import { Navigate, Outlet } from "react-router-dom"

const PrivateRoutes = () => {
  const userDetails = localStorage.getItem("pminToken")

  return userDetails ? <Outlet /> : <Navigate to={"/login"} />
}

export default PrivateRoutes
