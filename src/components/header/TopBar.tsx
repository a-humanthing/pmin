import { SlHandbag } from "react-icons/sl"
import { AiOutlineLogout } from "react-icons/ai"
import "./TopBar.css"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

const TopBar = () => {
  const navigate = useNavigate()
  const handleLogout = async () => {
    try {
      localStorage.removeItem("pminToken")
      navigate("/login")
      toast.success("Logout Successfull")
    } catch (error) {}
  }
  return (
    <>
      <div className="topBarContainer">
        <div className="topBarItem">
          <Link to={"/shop"} className="link">
            <span className="topBarIcon">
              <SlHandbag />
              Shop
            </span>
          </Link>
        </div>
        <div className="topBarItem">
          <Link to={"/"} className="link">
            <img
              src="/images/logoBrown.png"
              alt="Logo of Pure Beauty Skin Care"
            />
          </Link>
        </div>
        <div className="topBarItem">
          <span className="topBarIcon" onClick={handleLogout}>
            Logout
            <AiOutlineLogout />
          </span>
        </div>
      </div>
    </>
  )
}

export default TopBar
